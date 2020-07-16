import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  public accountForm: FormGroup;
  public submitted = false;
  public formUpdated = false;
  public username: string;
  public email: string;
  public password: string;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.intialiseFormState();
    this.getAccountDetails();
  }

  private intialiseFormState(): void {

    this.accountForm = this._fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get f() {
    return this.accountForm.controls;
  }

  private getAccountDetails(): void {
    this._authenticationService.getUser$()
      .subscribe(resp => {
        this.username = resp[0].name;
        this.email = resp[0].email;
        this.updateFormGroup();
      })
  }

  private updateFormGroup(): void {
    this.f.username.setValue(this.username);
    this.f.email.setValue(this.email);
  }

  public saveAccount(): void {
    let payload = {
      username: this.f.username.value,
      email: this.f.email.value
    }

    if (this.f.username.valid && this.f.email.valid) {
      this._authenticationService.updateAccount$(payload)
        .subscribe()
    } else {
      // flash message
    }
  }

  public savePassword(): void {
    if (this.f.password.valid) {
      this._authenticationService.updatePassword$(this.f.password.value)
        .subscribe(_ => {
          this.f.password.patchValue('')
        })
    } else {
      // flash messagee
    }
  }

  public deleteAccount(): void {
    this._authenticationService.deleteAccount$()
      .subscribe(resp => {
        if (resp.status == 200) {
          this._authenticationService.logout();
          alert('account deleted')
        } else {
          // flash message
        }
      });
  }

}

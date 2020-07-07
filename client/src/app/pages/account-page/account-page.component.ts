import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  public accountForm: FormGroup;
  public submitted = false;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.intialiseFormState();
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

  private validationCheck(): boolean {

    if (this.accountForm.valid) {
      return true;
    } else return false;

  }
  public saveAccount(): void {
    if(this.validationCheck()) {
      this.submitted = true;
      let payload = {
        username: this.f.username.value,
        email: this.f.email.value,
        password: this.f.password.value
      }
      this._authenticationService.updateAccount$(payload) // ASYNC PIPE?
    } else {
      return null// display saved message
    }

    
  }

  public resetPassword(): void {
    this._authenticationService.resetPassword$(this.f.password.value)
  }

  public deleteAccount(): void {
    this._authenticationService.deleteAccount();
    // flash msg
  }

}

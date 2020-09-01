import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted = false;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.intialiseFormState();
    this._authenticationService.decodeToken()
  }

  private intialiseFormState(): void {

    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f() {
    return this.loginForm.controls;
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.validationCheck()) {
      this._authenticationService.userLogin$(this.f.email.value, this.f.password.value)
        .subscribe(resp => {
          if (resp.status == 200) {
            this._authenticationService.storeUserData(resp.token, resp.user)
            this._authenticationService.loggedIn$()
              .subscribe();
            this._router.navigate(['finances'])
          } else {
            console.log('HIT ELSE BLOCK')
          }
        })

    }
  }

  private validationCheck(): boolean {

    if (this.loginForm.valid) {
      return true;
    } else return false;

  }

  public navigate(): void {
    this._router.navigate(['/register']);
  }
}

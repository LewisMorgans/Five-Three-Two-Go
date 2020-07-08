import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

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
      this._authenticationService.login$(this.f.email.value, this.f.password.value)
      .subscribe(resp => {
        if(resp.status === 200) {
          this._authenticationService.storeUserData(resp.token, resp.user)
          this._authenticationService.loggedIn$()
          .subscribe(resp => {
            console.log(resp)
          })
          // this._router.navigate(['finances'])
        } else {
          console.log(resp)
        }
      })
      
    }
  }

  private validationCheck(): boolean {

    if (this.loginForm.valid) {
      return true;
    } else return false;

  }

}

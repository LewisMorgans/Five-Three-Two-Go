import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public submitted = false;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.intialiseFormState();
  }

  private intialiseFormState(): void {

    this.registerForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  
  get f() {
    return this.registerForm.controls;
  }

  public onSubmit(): void {

    let payload = {
      email: this.f.email.value,
      username: this.f.username.value,
      password: this.f.password.value
    }


    // call service here
    this.submitted = true;
    if (this.validationCheck()) {
      console.log('in function')
      this._authenticationService.registerAccount$(payload)
      .subscribe(resp => {
        if(resp === 500) {
          this._router.navigate(['charts'])
        } else {
          console.log('failure')
        }
      })
      
    }
  }

  private validationCheck(): boolean {

    if (this.registerForm.valid) {
      return true;
    } else return false;

  }

}

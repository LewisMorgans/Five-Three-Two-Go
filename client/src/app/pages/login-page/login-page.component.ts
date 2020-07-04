import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private readonly _router: Router) { }

  ngOnInit(): void {
    this.intialiseFormState();
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
    // call service here
    this.submitted = true;
    if (this.validationCheck()) {
      this._router.navigate(['charts'])
    }
  }

  private validationCheck(): boolean {

    if (this.loginForm.valid) {
      return true;
    } else return false;

  }

}

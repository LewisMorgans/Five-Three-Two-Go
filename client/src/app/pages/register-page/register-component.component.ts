import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private readonly _router: Router) { }

  ngOnInit(): void {
    this.intialiseFormState();
  }

  private intialiseFormState(): void {

    this.registerForm = this._fb.group({
      email: ['', Validators.required, Validators.email],
      username: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6)],
      password2: ['', Validators.required, Validators.minLength(6)]
    })
  }
  
  get f() {
    return this.registerForm.controls;
  }

  public onSubmit(): void {
    // call service here
    this.submitted = true;
    if (this.validationCheck()) {
      this._router.navigate(['charts'])
    }
  }

  private validationCheck(): boolean {

    if (this.registerForm.valid) {
      return true;
    } else return false;

  }

}

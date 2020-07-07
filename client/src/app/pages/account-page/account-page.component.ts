import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private readonly _router: Router) { }

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
    // call service here
    this.submitted = true;
    // display saved message
    console.log(this.f)
  }

  public updatePassword(): void {
    // service call
  }

  public deleteAccount(): void {
    // service call
  }

}

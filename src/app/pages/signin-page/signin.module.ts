import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninPageComponent } from './signin-page.component';
import { IndexRoutingModule } from './signin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [SigninPageComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule
  ]
})
export class SigninModule { }
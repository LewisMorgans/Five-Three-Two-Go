import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPageComponent } from './index-page.component';
import { IndexRoutingModule } from './index-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IndexPageComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule
  ]
})
export class IndexModule { }
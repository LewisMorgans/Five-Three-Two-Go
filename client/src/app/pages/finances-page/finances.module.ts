import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancesRoutingModule } from './finances-routing.module';
import { FinancesPageComponent } from './finances-page.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [FinancesPageComponent],
  imports: [
    CommonModule,
    FinancesRoutingModule,
    GoogleChartsModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class FinancesModule { }
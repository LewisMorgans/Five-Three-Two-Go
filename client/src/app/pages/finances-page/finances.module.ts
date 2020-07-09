import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancesRoutingModule } from './finances-routing.module';
import { FinancesPageComponent } from './finances-page.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgChartjsModule } from 'ng-chartjs';
import { ChartsModule } from 'ng2-charts';
import { ModalPageComponent } from 'src/app/components/finances-modal/modal-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FinancesPageComponent,
    ModalPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FinancesRoutingModule,
    GoogleChartsModule,
    MDBBootstrapModule.forRoot(),
    NgChartjsModule,
    ChartsModule
  ]
})
export class FinancesModule { }
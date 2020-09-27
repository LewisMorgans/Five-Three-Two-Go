import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgChartjsModule } from 'ng-chartjs';
import { ChartsModule } from 'ng2-charts';
import { ModalPageComponent } from 'src/app/components/finances-modal/modal-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountPageComponent } from 'src/app/components/account-component/account.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    ModalPageComponent,
    AccountPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    GoogleChartsModule,
    MDBBootstrapModule.forRoot(),
    NgChartjsModule,
    ChartsModule
  ]
})
export class DashboardModule { }
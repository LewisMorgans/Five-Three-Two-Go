import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page.component';
import { AuthenticationGaurdGuard } from 'src/app/gaurds/authentication-gaurd.guard';


const routes: Routes = [
    {
        path: '',
        component: DashboardPageComponent,
        canActivate: [AuthenticationGaurdGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
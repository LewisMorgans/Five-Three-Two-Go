import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountPageComponent } from './account-page.component';
import { AuthenticationGaurdGuard } from 'src/app/gaurds/authentication-gaurd.guard';


const routes: Routes = [
    {
        path: '',
        component: AccountPageComponent,
        canActivate: [AuthenticationGaurdGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
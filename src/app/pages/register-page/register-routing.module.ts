import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register-component.component';
import { AuthenticationGaurdGuard } from 'src/app/gaurds/authentication-gaurd.guard';


const routes: Routes = [
    {
        path: '',
        component: RegisterComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class RegisterRoutingModule { }
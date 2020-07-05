import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancesPageComponent } from './finances-page.component';


const routes: Routes = [
    {
        path: '',
        component: FinancesPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class FinancesRoutingModule { }
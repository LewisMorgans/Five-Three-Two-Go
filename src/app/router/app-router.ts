import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { AuthenticationGaurdGuard } from '../gaurds/authentication-gaurd.guard'

const applicationRoutes: Routes = [
    { path: '', loadChildren: () => import('../pages/index-page/index.module').then(m => m.IndexModule) },
    { path: 'register', loadChildren: () => import('../pages/register-page/register.module').then(m => m.RegisterModule) },
    { path: 'finances', loadChildren: () => import('../pages/finances-page/finances.module').then(m => m.FinancesModule) }
  ]
  
  @NgModule({
    imports: [RouterModule.forRoot(applicationRoutes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }
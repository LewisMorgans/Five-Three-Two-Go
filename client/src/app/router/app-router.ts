import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { AuthenticationGaurdGuard } from '../gaurds/authentication-gaurd.guard'

const applicationRoutes: Routes = [
    { path: '', loadChildren: () => import('../pages/index-page/index.module').then(m => m.IndexModule) },
    { path: 'sign-in', loadChildren: () => import('../pages/login-page/login.module').then(m => m.LoginModule) },
    { path: 'register', loadChildren: () => import('../pages/register-page/register.module').then(m => m.RegisterModule) },
    { path: 'finances', loadChildren: () => import('../pages/finances-page/finances.module').then(m => m.FinancesModule) },
    { path: 'account', loadChildren: () => import('../pages/account-page/account.module').then(m => m.AccountModule) }
  ]
  
  @NgModule({
    imports: [RouterModule.forRoot(applicationRoutes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }
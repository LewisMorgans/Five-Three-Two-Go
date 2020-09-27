import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { AuthenticationGaurdGuard } from '../gaurds/authentication-gaurd.guard'

const applicationRoutes: Routes = [
    { path: '', loadChildren: () => import('../pages/signin-page/signin.module').then(m => m.SigninModule) },
    { path: 'register', loadChildren: () => import('../pages/register-page/register.module').then(m => m.RegisterModule) },
    { path: 'finances', loadChildren: () => import('../pages/dashboard-page/dashboard.module').then(m => m.DashboardModule) }
  ]
  
  @NgModule({
    imports: [RouterModule.forRoot(applicationRoutes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }
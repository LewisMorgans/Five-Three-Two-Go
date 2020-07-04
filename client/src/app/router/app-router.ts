import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

const applicationRoutes: Routes = [
    { path: '', loadChildren: () => import('../pages/index-page/index.module').then(m => m.IndexModule) },
    { path: 'sign-in', loadChildren: () => import('../pages/login-page/login.module').then(m => m.LoginModule) },
    // { path: 'contact-us', loadChildren: () => import('../pages/contact-us/contact-us.module').then(m => m.ContactUsModule) },
    // { path: 'portfolio', loadChildren: () => import('../pages/portfolio/portfolio.module').then(m => m.PortfolioModule) },
  ]
  
  @NgModule({
    imports: [RouterModule.forRoot(applicationRoutes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { RegisterComponentComponent } from './pages/register-page/register-component.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ChartsPageComponent } from './pages/charts-page/charts-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { FinancesPageComponent } from './pages/finances-page/finances-page.component';
import { NavbarComponentComponent } from './components/navbar/navbar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    RegisterComponentComponent,
    LoginPageComponent,
    ChartsPageComponent,
    AccountPageComponent,
    FinancesPageComponent,
    NavbarComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

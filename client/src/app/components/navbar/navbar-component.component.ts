import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.scss']
})
export class NavbarComponentComponent implements OnInit {

   public loggedIn$; // = this._authenticationService.loggedIn$();

  constructor(private readonly _router: Router,
    private readonly _authenticationService: AuthenticationService) {

     }

    ngOnInit() {
      this._authenticationService.loggedIn$().subscribe(r => console.log(r))
    }

  public handleClick(params: string): void {

    switch (params) { 
      case 'signin':
        this._router.navigate(['sign-in'])
        break;
      case 'register':
        this._router.navigate(['register'])
        break;
      case 'finances':
        this._router.navigate(['finances'])
        break;
      case 'account':
        this._router.navigate(['account'])
        break;
      case 'logout':
        this._authenticationService.userLogout();
        break;
      default:
        return null
    }
  }
}

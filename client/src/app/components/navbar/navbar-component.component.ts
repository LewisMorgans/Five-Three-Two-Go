import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.scss']
})
export class NavbarComponentComponent {

  constructor(private readonly _router: Router) { }

  public handleClick(params: string): void {
    console.log(params)
    switch (params) {
      case 'signin':
        this._router.navigate(['sign-in'])
        break;
      case 'register':
        this._router.navigate(['register'])
        break;
      case 'finances':
        this._router.navigate(['finances'])
      case 'account':
        this._router.navigate(['account'])
      default:
        return null
    }
  }
}

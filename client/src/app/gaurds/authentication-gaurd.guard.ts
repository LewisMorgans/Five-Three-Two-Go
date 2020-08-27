import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription, Subscriber } from 'rxjs';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGaurdGuard implements CanActivate {
  constructor(private readonly _authenticationService: AuthenticationService) {

  }
  // valid: boolean
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      let valid =  this._authenticationService.loggedIn$().pipe(
        map(x => x)
        
      )
      console.log(valid)
      return valid
  }
  
}

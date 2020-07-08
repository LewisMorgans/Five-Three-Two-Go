import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

interface UserData {
    token: string,
    user: object
}

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private userProfile;

    constructor(
        private readonly _http: HttpClient,
        private readonly _router: Router,
        private readonly _helperService: JwtHelperService
    ) { }

    authtoken;
    options;


    get token() {
        return this.authtoken;
    }

    set token(token) {
        this.authtoken = token;
    };

    get user() {
       return this.userProfile
    };

    set user(user) {
        this.userProfile = user;
    }

    loggedIn$(): Observable<boolean> {
        let decode = this.decodeToken();
        let payload = {
            token: decode.userId
        }
        
        return this._http.post<boolean>('api/authentication/loggedIn', payload)
    }

    decodeToken() {
       return this._helperService.decodeToken(this.authtoken)
    }

    storeUserData(token, user): void {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user))
        this.token = token;
        this.user = user;
    }

    login$(email: string, password: string): Observable<any> {
        let payload = {
            emailAddress: email,
            password: password
        }

        return this._http.post('api/authentication/login', payload)
    }

    resetPassword$(password: string): Observable<{}> {
        return this._http.post('api/authentication/resetPassword', password)
    }

    logout(): void {
        localStorage.clear();
        this._router.navigate([''])
    };

    updateAccount$(payload: object) {
        return this._http.post('api/authentication/updateAccount', payload)
    }

    getUser$(): Observable<object> {
        return this._http.get('api/authentication/getUser')
    }

    deleteAccount(): void {
        this._http.get('api/authentication/updateAccount'); // observables?
    }

    registerAccount$(payload): Observable<{}> {
        return this._http.post('api/authentication/register', payload)
    }


}
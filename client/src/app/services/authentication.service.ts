import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export interface UserData {
    name: string,
    email: string,
    password: string
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
        return localStorage.getItem('token')
    }

    set token(token) {
        this.authtoken = token;
    };

    get user() {
        return localStorage.getItem('user')
    };

    set user(user) {
        this.userProfile = user;
    }

    loggedIn$(): Observable<boolean> {

        let decode = this.decodeToken();
        if (decode === null) {
            return of(false);
        } else {
            let payload = {
                token: decode.userId
            }

            return this._http.post<boolean>('api/authentication/loggedIn', payload)
        }

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

    updateAccount$(update: object) {
        let user = this.decodeToken();
        let payload = {
            ...update,
            user
        }

        return this._http.post('api/authentication/updateAccount', payload)
    };

    updatePassword$(password: 'string'): Observable<any> {
        let user = this.decodeToken();
        let payload = {
            password: password,
            ...user
        };
        return this._http.post('api/authentication/updatePassword', payload);
    }

    getUser$(): Observable<any> {
        let user = this.decodeToken();
        let payload = {
            userId: user.userId
        }
        return this._http.post<object | number | UserData>('api/authentication/getUser', payload)
    }

    deleteAccount(): Observable<any> {
        let user = this.decodeToken();
        let payload = {
            userId: user.userId
        }
        return this._http.post('api/authentication/deleteAccount', payload); // observables?
    }

    registerAccount$(payload): Observable<any> {
        return this._http.post('api/authentication/register', payload)
    }


}
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export interface UserData {
    name: string,
    email: string,
    password: string,
    userId?: string
}

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private currentUser: UserData;
    constructor(
        private readonly _http: HttpClient,
        private readonly _router: Router,
        private readonly _helperService: JwtHelperService
    ) { }

    get token() {
        return localStorage.getItem('token')
    }

    get user() {
        return localStorage.getItem('user')
    };

    loggedIn$(): Observable<boolean> {  
        this.decodeToken();
        if (!this.currentUser) {
            return of(false);
        } else {
            const payload = { token: this.currentUser.userId }
            return this._http.post<boolean>('api/authentication/loggedIn', payload);
        }
    }

    decodeToken() {
        this.currentUser = this._helperService.decodeToken(this.token);
    };

    storeUserData(token, user): void {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.decodeToken();
    };

    userLogin$(email: string, password: string): Observable<any> {
        const payload = {
            emailAddress: email,
            password: password
        };

        return this._http.post('api/authentication/login', payload);
    };

    userLogout(): void {
        localStorage.clear();
        this._router.navigate(['']);
    };

    updateAccount$(update: object): Observable<any> {
        const payload = {
            ...update,
            user: this.currentUser
        };
        return this._http.post('api/authentication/updateAccount', payload)
    };

    updatePassword$(password: string): Observable<any> {
        const payload = {
            password: password,
            ...this.currentUser
        };
        return this._http.post('api/authentication/updatePassword', payload);
    };

    getUser$(): Observable<any> {
        const payload = { userId: this.currentUser.userId };
        return this._http.post<object | number | UserData>('api/authentication/getUser', payload);
    };

    deleteAccount$(): Observable<any> {
        const payload = { userId: this.currentUser.userId };
        return this._http.post('api/authentication/deleteAccount', payload);
    };

    registerAccount$(payload): Observable<any> {
        return this._http.post('api/authentication/register', payload)
    };


}
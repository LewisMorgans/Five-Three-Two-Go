import { Injectable } from "@angular/core";
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(
        private readonly _http: HttpClient,
        private readonly _router: Router
    ) { }


    login(email: string, password: string): Observable<{}> {
        let payload = {
            emailAddress: email,
            password: password
        }

        return this._http.post('api/authentication/login', payload)
    }

    resetPassword(password: string): Observable<{}> {
        return this._http.post('api/authentication/resetPassword', password)
    }

    logout(): void {
        localStorage.clear();
        this._router.navigate([''])
    };

    updateEmail(email: string) {
        return this._http.post('api/authentication/updateEmail', email)
    }

    updatePassword(password: string) {
        return this._http.post('api/authentication/updatePassword', password)
    }

    updateUsername(username: string) {
        return this._http.post('api/authentication/updateUsername', username)
    }

    getUser(): Observable<object> {
        return this._http.get('api/authentication/getUser')
    }








}
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(
        private readonly _router: Router
    ) {}


    login(email: string, password: string): Observable<{}> {
        return EMPTY;
    }

    resetPassword(password: string): Observable<{}> {
        return EMPTY;
    }

    logout(): void {

    };

    updateEmail() {

    }

    updatePassword() {

    }

    updateUsername() {

    }








}
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { AuthenticationService, UserData } from '../authentication/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class DataRetrievalService {

    private currentUser: UserData

    constructor(
        private readonly _http: HttpClient,
        private readonly _helperService: JwtHelperService
    ) { }

    get userData() {
        return this._helperService.decodeToken(localStorage.getItem('token')); 
    }

    getFinances$(): Observable<any> {
        let payload = {
            userId: this.userData.userId
        }
        return this._http.post<any>('api/data/getFinances', payload)
    }

    setFinances$(finances: object): Observable<{}> {
        let payload = {
            ...finances,
            userId: this.userData.userId
        }
        return this._http.post('api/data/setFinances', payload)
    }

}
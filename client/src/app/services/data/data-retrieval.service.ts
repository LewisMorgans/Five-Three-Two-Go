import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class DataRetrievalService {

    constructor(
        private readonly _http: HttpClient,
        private readonly _decoder: AuthenticationService
    ) { }

    getFinances$(): Observable<any> {
        let user = this._decoder.decodeToken();
        let payload = {
            userId: user.userId
        }
        return this._http.post<any>('api/data/getFinances', payload)
    }

    setFinances$(finances: object): Observable<{}> {
        let user = this._decoder.decodeToken();
        let payload = {
            ...finances,
            userId: user.userId
        }
        return this._http.post('api/data/setFinances', payload)
    }

}
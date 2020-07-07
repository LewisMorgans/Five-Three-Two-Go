import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataRetrievalService {

    constructor(
        private readonly _http: HttpClient
    ){}

    getFinances$(): Observable<{}> {
        return this._http.get('api/data/getFinances')
    }

    setFinances$(payload: object): Observable<{}> {
        return this._http.post('api/data/getFinances', payload)
    }

}
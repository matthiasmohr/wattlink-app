import { Anfrage } from './Anfrage';
import {find, flatMap, Observable, tap, throwError} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, filter, map} from "rxjs/operators";
import {AnfragenTable} from "../_fake/anfragen.table";
import {environment} from "../../environments/environment";
import {Partnerprofil} from "./Partnerprofil";


const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Skip-XSRF-TOKEN': 'true',
});

@Injectable({
    providedIn: 'root',
})
export class AnfragenApiService {
    anfragenUrl = environment.backendApi + '/v1/anfrage';

    constructor(public http: HttpClient) {}

    getAnfragen(): Observable<Anfrage[]> {
        return this.http.get<any>(this.anfragenUrl, { headers }).pipe(
            map(response => response['anfragen']),
            catchError(this.handleError)
        );
    }

    getAnfragenAnzahl(): Observable<number> {
        return this.http.get<any>(this.anfragenUrl, { headers }).pipe(
            map(response => response['anzahl']),
            catchError(this.handleError)
        );
    }

    getAnfrage(anfrageID: any): Observable<Anfrage> {
        const url = `${this.anfragenUrl}?anfrageID=${anfrageID}`;
        return this.http.get<any>(url, { headers }).pipe(
            tap(response => console.log('Response:', response)),
            map(response => response['anfragen'] && response['anfragen'].length > 0 ? response['anfragen'][0] : null),
            catchError(this.handleError)
        );
    }

    createAnfrage(anfrage: Anfrage): Observable<Anfrage> {
        return this.http.post<Anfrage>(this.anfragenUrl, anfrage).pipe(
            catchError(this.handleError)
        )
    }

    private handleError (error: HttpErrorResponse) {
        // TODO: Remote error handling
        console.error(error); // log to console instead
        return throwError(error);
    }
}
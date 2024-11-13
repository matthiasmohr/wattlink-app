import { Anfrage } from './Anfrage';
import {find, Observable, tap, throwError} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, filter, map} from "rxjs/operators";
import {AnfragenTable} from "../_fake/anfragen.table";
import {environment} from "../../environments/environment";


const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Skip-XSRF-TOKEN': 'true',
});

@Injectable({
    providedIn: 'root',
})
export class AnfragenApiService {
    //anfragenUrl = 'api/anfragen'; // this is for local testing
    anfragenUrl = environment.backendApi + '/v1/anfrage';

    constructor(public http: HttpClient) {}

    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/

    getAnfragen(): Observable<Anfrage[]> {
        return this.http.get<any>(this.anfragenUrl, { headers }).pipe(
            //retry(2),
            //tap(data => console.log(data)),// eyeball results in the console
            map(response => response['anfragen']),
            catchError(this.handleError)
        );
    }

    // Deprecated (soll ersetzt werden durch serverseitige Filterung)
    getAnfrage(id: any): Observable<Anfrage> {
        const url = `${this.anfragenUrl}`;
        return this.http.get<any>(url).pipe(
            map(response => response['anfragen']),
            //find(anfrage=> anfrage.anfrageID == "07d3a60c-2f58-4623-8a7e-defe314ceb78"),
            map(anfragen => anfragen.filter(
                    (anfrage: any) => anfrage.anfrageID == id
                )[0]),
            catchError(this.handleError)
        );
    }

    createAnfrage(anfrage: Anfrage): Observable<Anfrage> {
        return this.http.post<Anfrage>(this.anfragenUrl, anfrage).pipe(
            catchError(this.handleError)
        )
    }

    private handleError (error: HttpErrorResponse) {
        // In a real world app, we might send the error to remote logging infrastructure
        // and reformat for user consumption
        console.error(error); // log to console instead
        return throwError(error);
    }
}
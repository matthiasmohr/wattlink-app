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
export class AnfragenAgentApiService {
    //anfragenUrl = 'api/anfragen'; // this is for local testing
    anfragenAgentUrl = environment.backendApi + '/agent-v1/anfrage';

    constructor(public http: HttpClient) {}

    /*========================================
        AGENT Endpoints
    =========================================*/
    getAnfragen(partnerprofilID: any): Observable<Anfrage[]> {
        return this.http.get<any>(this.anfragenAgentUrl + '?partnerprofilID=' + partnerprofilID, { headers }).pipe(
            //retry(2),
            //tap(data => console.log(data)), // eyeball results in the console
            map(response => response['anfragen']),
            catchError(this.handleError)
        );
    }

    getAnfragenAnzahl(partnerprofilID: any): Observable<number> {
        return this.http.get<any>(this.anfragenAgentUrl + '?partnerprofilID=' + partnerprofilID, { headers }).pipe(
            //retry(2),
            //tap(data => console.log(data)), // eyeball results in the console
            map(response => response['anzahl']),
            catchError(this.handleError)
        );
    }

    getAnfrage(anfrageID: any, partnerprofilID: any): Observable<Anfrage> {
        const url = `${this.anfragenAgentUrl}?anfrageID=${anfrageID}&partnerprofilID=${partnerprofilID}`;
        return this.http.get<any>(url, { headers }).pipe(
            //tap(data => console.log("result", data)), // eyeball results in the console
            map(response => response['anfragen'] && response['anfragen'].length > 0 ? response['anfragen'][0] : null),
            catchError(this.handleError)
        );
    }

    // Deprecated (soll ersetzt werden durch serverseitige Filterung)
    getAnfrage_OLD(partnerprofilID: any, id: any): Observable<Anfrage> {
        const url = `${this.anfragenAgentUrl}`;
        return this.http.get<any>(this.anfragenAgentUrl + '?partnerprofilID=' + partnerprofilID, { headers }).pipe(
            map(response => response['anfragen']),
            //find(anfrage=> anfrage.anfrageID == "07d3a60c-2f58-4623-8a7e-defe314ceb78"),
            map(anfragen => anfragen.filter(
                (anfrage: any) => anfrage.anfrageID == id
            )[0]),
            catchError(this.handleError)
        );
    }

    private handleError (error: HttpErrorResponse) {
        // In a real world app, we might send the error to remote logging infrastructure
        // and reformat for user consumption
        console.error(error); // log to console instead
        return throwError(error);
    }
}
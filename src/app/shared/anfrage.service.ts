import { Anfrage } from './Anfrage';
import {Observable, throwError} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {AnfragenTable} from "../_fake/anfragen.table";


const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Skip-XSRF-TOKEN': 'true',
});

@Injectable({
    providedIn: 'root',
})
export class AnfragenApiService {
    // Define API
    anfragenUrl = 'api/anfragen';

    constructor(public http: HttpClient) {}

    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/

    getAnfragen(): Observable<Anfrage[]> {
        return this.http.get<Anfrage[]>(this.anfragenUrl, { headers }).pipe(
            //retry(2),
            //tap(data => console.log(data)), // eyeball results in the console
            catchError(this.handleError)
        );
    }

    getAnfrage(id: any): Observable<Anfrage> {
        const url = `${this.anfragenUrl}/${id}`;
        return this.http.get<Anfrage>(url).pipe(
            catchError(this.handleError)
        );
    }

    createAnfrage(anfrage: Anfrage): Observable<Anfrage> {
        anfrage.anfrageId = "";
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
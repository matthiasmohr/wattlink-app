import {Observable, throwError} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Partnerprofil} from "./Partnerprofil";
import {Nachricht} from "./Nachricht";
import {environment} from "../../environments/environment";

const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Skip-XSRF-TOKEN': 'true',
});

@Injectable({
    providedIn: 'root',
})
export class NachrichtenApiService {
    // Define API
    //nachrichtenUrl = 'api/nachrichten';
    nachrichtenUrl = environment.backendApi + '/v1/nachricht';

    constructor(public http: HttpClient) {}

    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/

    getNachrichten(): Observable<Nachricht[]> {
        return this.http.get<any>(this.nachrichtenUrl, { headers }).pipe(
            //retry(2),
            //tap(data => console.log(data)), // eyeball results in the console
            map(response => response['nachricht']),
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
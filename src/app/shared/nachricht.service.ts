import {Observable, throwError} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Partnerprofil} from "./Partnerprofil";
import {Nachricht} from "./Nachricht";

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
    nachrichtenUrl = 'api/nachrichten';

    constructor(public http: HttpClient) {}

    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/

    getNachrichten(): Observable<Nachricht[]> {
        return this.http.get<Nachricht[]>(this.nachrichtenUrl, { headers }).pipe(
            //retry(2),
            //tap(data => console.log(data)), // eyeball results in the console
            catchError(this.handleError)
        );
    }

    createNachricht(nachricht: Nachricht): Observable<Nachricht> {
        // TODO: ID dynamisch machen
        //nachricht.id = 2
        return this.http.post<Nachricht>(this.nachrichtenUrl, nachricht).pipe(
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
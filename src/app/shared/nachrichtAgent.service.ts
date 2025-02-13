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
export class NachrichtenAgentApiService {
    constructor(public http: HttpClient) {}
    nachrichtenAgentUrl = environment.backendApi + '/agent-v1/nachricht';

    getNachrichten(partnerprofilID: any, anfrageID?: any): Observable<Nachricht[]> {
      const url = `${this.nachrichtenAgentUrl}?anfrageID=${anfrageID}&partnerprofilID=${partnerprofilID}`;
      return this.http.get<any>(url, { headers }).pipe(
            //retry(2),
            //tap(data => console.log(data)), // eyeball results in the console
            map(response => response['nachricht']),
            catchError(this.handleError)
        );
    }

    createNachricht(nachricht: Nachricht): Observable<Nachricht> {
        return this.http.post<Nachricht>(this.nachrichtenAgentUrl, nachricht, { headers }).pipe(
            catchError(this.handleError)
        )
    }

    private handleError (error: HttpErrorResponse) {
        console.error(error); // log to console instead
        return throwError(error);
    }
}
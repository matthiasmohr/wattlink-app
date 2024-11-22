import {Observable, throwError} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {Angebot} from "./Angebot";

const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Skip-XSRF-TOKEN': 'true',
});

@Injectable({
    providedIn: 'root',
})
export class AngeboteApiService {
    constructor(public http: HttpClient) {}

    angeboteUrl = environment.backendApi + '/v1/angebot';

    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/

    getAngebote(anfrageID: string): Observable<Angebot[]> {
        var params  = new HttpParams();
        params = params.append("AnfrageID", anfrageID)
        return this.http.get<any>(this.angeboteUrl, { headers: headers, params: params }).pipe(
            //retry(2),
            //tap(data => console.log(data)), // eyeball results in the console
            map(response => response['angebote']),
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
import {Observable, throwError} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Messlokation} from "./Messlokation";
import {Lastkurve} from "./Lastkurve";


const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-Skip-XSRF-TOKEN': 'true',
});

@Injectable({
    providedIn: 'root',
})
export class LastkurvenApiService {
    // Define API
    lastkurvenUrl = 'api/lastkurven';

    constructor(public http: HttpClient) {}


    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/

    getLastkurve(id: any): Observable<Lastkurve> {
        const url = `${this.lastkurvenUrl}/${id}`;
        return this.http.get<Lastkurve>(url).pipe(
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
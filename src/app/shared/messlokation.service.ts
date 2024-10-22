import {Observable, throwError} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Messlokation} from "./Messlokation";


const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-Skip-XSRF-TOKEN': 'true',
});

@Injectable({
    providedIn: 'root',
})
export class MesslokationenApiService {
    // Define API
    messlokationenUrl = 'api/messlokationen';

    constructor(public http: HttpClient) {}


    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/

    getMesslokationen(anfrageId: any): Observable<Messlokation[]> {
        return this.http.get<Messlokation[]>(this.messlokationenUrl, { headers }).pipe(
            //retry(2),
            //tap(data => console.log(data)), // eyeball results in the console
            catchError(this.handleError)
        );
    }

    getMesslokation(id: any): Observable<Messlokation> {
        const url = `${this.messlokationenUrl}/${id}`;
        return this.http.get<Messlokation>(url).pipe(
            catchError(this.handleError)
        );
    }

    createMesslokation(messlokation: Messlokation): Observable<Messlokation> {
        return this.http.post<Messlokation>(this.messlokationenUrl, messlokation).pipe(
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
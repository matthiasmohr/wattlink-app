import {Observable, throwError} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Messlokation} from "./Messlokation";
import {environment} from "../../environments/environment";
import {Anfrage} from "./Anfrage";


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
    //messlokationenUrl = 'api/messlokationen';
    messlokationenUrl = environment.backendApi + '/v1/messlokation';

    constructor(public http: HttpClient) {}


    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/

    getMesslokationen(anfrageId: any): Observable<Messlokation[]> {
        return this.http.get<any>(this.messlokationenUrl, { headers }).pipe(
            //retry(2),
            //tap(data => console.log(data)), // eyeball results in the console
            map(response => response['messlokation']),
            catchError(this.handleError)
        );
    }

    // Deprecated (soll ersetzt werden durch serverseitige Filterung)
    getMesslokation(id: any): Observable<Messlokation> {
        const url = `${this.messlokationenUrl}`;
        return this.http.get<any>(url).pipe(
            map(response => response['messlokation']),
            //find(anfrage=> anfrage.anfrageID == "07d3a60c-2f58-4623-8a7e-defe314ceb78"),
            map(messlokationen => messlokationen.filter(
                (messlokation: any) => messlokation.messlokationID == id
            )[0]),
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
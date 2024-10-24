import {Observable, throwError} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Partnerprofil} from "./Partnerprofil";

const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Skip-XSRF-TOKEN': 'true',
});

@Injectable({
    providedIn: 'root',
})
export class PartnerprofilApiService {
    // Define API
    partnerprofileUrl = 'api/partnerprofile';

    constructor(public http: HttpClient) {}

    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/

    getPartnerprofile(): Observable<Partnerprofil[]> {
        return this.http.get<Partnerprofil[]>(this.partnerprofileUrl, { headers }).pipe(
            //retry(2),
            //tap(data => console.log(data)), // eyeball results in the console
            catchError(this.handleError)
        );
    }

    getPartnerprofil(id: any): Observable<Partnerprofil> {
        const url = `${this.partnerprofileUrl}/${id}`;
        return this.http.get<Partnerprofil>(url).pipe(
            catchError(this.handleError)
        );
    }

    createPartnerprofil(partnerprofil: Partnerprofil): Observable<Partnerprofil> {
        return this.http.post<Partnerprofil>(this.partnerprofileUrl, partnerprofil).pipe(
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
import {Observable, throwError} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Partnerprofil} from "./Partnerprofil";
import {environment} from "../../environments/environment";
import {Nachricht} from "./Nachricht";

const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Skip-XSRF-TOKEN': 'true',
});

@Injectable({
    providedIn: 'root',
})
export class PartnerprofileAgentApiService {
    //partnerprofileUrl = 'api/partnerprofile';
    partnerprofilAgentUrl = environment.backendApi + '/agent-v1/partnerprofil';

    constructor(public http: HttpClient) {}

    /*========================================
      AGENT Endpoints
    =========================================*/
    getPartnerprofileAgent(): Observable<Partnerprofil[]> {
        return this.http.get<any>(this.partnerprofilAgentUrl, { headers }).pipe(
            //retry(2),
            //tap(data => console.log(data)), // eyeball results in the console
            map(response => response['partnerprofile']),
            catchError(this.handleError)
        );
    }


    /*========================================
      HELPERS
    =========================================*/
    private handleError (error: HttpErrorResponse) {
        // In a real world app, we might send the error to remote logging infrastructure
        // and reformat for user consumption
        console.error(error); // log to console instead
        return throwError(error);
    }
}
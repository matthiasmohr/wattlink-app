import {Observable, throwError} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Partnerprofil} from "./Partnerprofil";
import {environment} from "../../environments/environment";
import {Nachricht} from "./Nachricht";
import {Anfrage} from "./Anfrage";

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
    getPartnerprofileAgent(): Observable<Partnerprofil[]> {
        return this.http.get<any>(this.partnerprofilAgentUrl, { headers }).pipe(
            //retry(2),
            //tap(data => console.log(data)), // eyeball results in the console
            map(response => response['partnerprofile']),
            catchError(this.handleError)
        );
    }

    // Deprecated (soll ersetzt werden durch serverseitige Filterung)
    getPartnerprofilAgent(partnerprofilID: any): Observable<Partnerprofil> {
        return this.http.get<any>(this.partnerprofilAgentUrl + '?partnerprofilID=' + partnerprofilID, { headers }).pipe(
            map(response => response['partnerprofile']),
            //find(anfrage=> anfrage.anfrageID == "07d3a60c-2f58-4623-8a7e-defe314ceb78"),
            map(partnerprofile => partnerprofile.filter(
                (partnerprofil: any) => partnerprofil.partnerprofilID == partnerprofilID
            )[0]),
            catchError(this.handleError)
        );
    }

    editPartnerprofilAgent(partnerprofil: Partnerprofil): Observable<Partnerprofil> {
        return this.http.post<Partnerprofil>(this.partnerprofilAgentUrl, partnerprofil).pipe(
            catchError(this.handleError)
        )
    }

    deletePartnerprofilAgent(partnerprofil: Partnerprofil): Observable<any> {
        return this.http.request<Partnerprofil>('delete',this.partnerprofilAgentUrl, {
            body: partnerprofil,
            headers: headers
        }).pipe(
          catchError(this.handleError)
        )
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
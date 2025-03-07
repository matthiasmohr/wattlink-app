import {Observable, throwError} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {Datei} from "./Datei";

const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Skip-XSRF-TOKEN': 'true',
});

@Injectable({
    providedIn: 'root',
})
export class DateienApiService {
    constructor(public http: HttpClient) {}

    dateiUrl = environment.backendApi + '/v1/datei';

    getDateien(anfrageID?: string): Observable<Datei[]> {
      let url = this.dateiUrl;
      if (anfrageID) {
        url += `/${anfrageID}`;
      }
      return this.http.get<any>(url, { headers }).pipe(
        map(response => response['dateien']),
        catchError(this.handleError)
      );
    }

    downloadDatei(dateiID: string): Observable<Blob> {
      const url = `${this.dateiUrl}/download?dateiID=${dateiID}`;
      return this.http.get(url, { headers, responseType: 'blob' }).pipe(
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
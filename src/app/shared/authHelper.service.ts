import { Injectable } from '@angular/core';
import {AuthService, AuthService as Auth0Service} from '@auth0/auth0-angular';
import {Observable, map} from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AuthHelperService {
    constructor(private auth: AuthService) {}

    hasPermission(permission: string): Observable<boolean> {
        return this.auth.getAccessTokenSilently().pipe(
            map((token: any) => {
                const parsedToken = this.parseJwt(token);
                return parsedToken?.permissions?.includes(permission) || false;
            })
        );
    }

    parseJwt(token: string): any {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            console.error('Token parsing failed', e);
            return null;
        }
    }
}
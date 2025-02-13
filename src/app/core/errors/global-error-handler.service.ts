import { HttpErrorResponse } from '@angular/common/http';
import {ErrorHandler, inject, Injectable, Injector, NgZone} from '@angular/core';
import { ErrorDialogService } from '../../modules/shared/errors/error-dialog.service';

@Injectable({
    providedIn: 'root'
})

export class GlobalErrorHandlerService implements ErrorHandler {
    // TODO: Extend Remote Logging (e.g. https://www.telerik.com/blogs/implementing-global-error-handler-angular-step-guide)
    constructor(private injector: Injector,) {}

    handleError(error: any) {
        // Load the errorDialog crazily -> Otherwise we would get circular references
        const errorDialogService = this.injector.get(ErrorDialogService)

        console.error('Error from global error handler:', error);
        console.error('Error message:', error.message);
        console.error('Stack trace:', error.stack);
        // Check if it's an error from an HTTP response
        if (error instanceof HttpErrorResponse) {
            console.error('Backend returned status code:', error.status);
            console.error('Response body:', error.message);
        }

        errorDialogService.showMessage(
            error.name || 'Undefined server error',
            error.message || 'Undefined server error',
        )

    }
}

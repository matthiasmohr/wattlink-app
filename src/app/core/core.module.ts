import { CommonModule } from '@angular/common';
import {ErrorHandler, NgModule, provideZoneChangeDetection} from '@angular/core';
import { GlobalErrorHandlerService } from './errors/global-error-handler.service';
import {SharedModule} from "../modules/shared/shared.module";

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandlerService,
        },
        provideZoneChangeDetection({ eventCoalescing: true }),
    ],
})
export class CoreModule {}

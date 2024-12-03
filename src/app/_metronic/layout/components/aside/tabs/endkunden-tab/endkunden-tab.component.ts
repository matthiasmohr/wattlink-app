import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavigationCancel, NavigationEnd, Router } from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {
  DrawerComponent,
  MenuComponent,
  ScrollComponent,
  ToggleComponent,
} from 'src/app/_metronic/kt/components';
import { environment } from '../../../../../../../environments/environment';
import {PartnerprofileApiService} from "../../../../../../shared/partnerprofil.service";

@Component({
  selector: 'app-endkunden-tab',
  templateUrl: './endkunden-tab.component.html',
  styleUrls: ['./endkunden-tab.component.scss'],
})
export class EndkundenTabComponent implements OnInit, OnDestroy {
  appAngularVersion: string = environment.appVersion;
  @ViewChild('ktAsideScroll', { static: true }) ktAsideScroll: ElementRef;
  private unsubscribe: Subscription[] = [];

  constructor(
      private router: Router,
      public partnerprofileApiService: PartnerprofileApiService,
      ) {}

  partnerprofil$: Observable<any>;

  ngOnInit(): void {
    this.routingChanges();
    this.partnerprofil$ = this.partnerprofileApiService.getPartnerprofil();
  }

  routingChanges() {
    const routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.menuReinitialization();
      }
    });
    this.unsubscribe.push(routerSubscription);
  }

  menuReinitialization() {
    setTimeout(() => {
      MenuComponent.reinitialization();
      DrawerComponent.reinitialization();
      ToggleComponent.reinitialization();
      ScrollComponent.reinitialization();
      if (this.ktAsideScroll && this.ktAsideScroll.nativeElement) {
        this.ktAsideScroll.nativeElement.scrollTop = 0;
      }
    }, 50);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  protected readonly environment = environment;
}

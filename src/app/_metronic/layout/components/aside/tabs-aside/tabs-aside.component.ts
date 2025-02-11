import { Component, Input, OnInit } from '@angular/core';
import {AuthHelperService} from "src/app/shared/authHelper.service";
import { Tab, tabs } from '../tabs';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tabs-aside',
  templateUrl: './tabs-aside.component.html',
})

export class TabsAsideComponent implements OnInit {
  @Input() activeTab: Tab = tabs[0];
  @Input() setActiveTab: (
    activeTabLink:
      | 'endkunden'
      | 'versorger'
      | 'agent'
  ) => void;

  filteredTabs$: Observable<ReadonlyArray<Tab>>;

  constructor(
      private authHelperService: AuthHelperService
  ) {}

  ngOnInit(): void {
    this.filteredTabs$ = forkJoin(
        tabs.map((tab: any) =>
            tab.requiredPermission
                ? this.authHelperService.hasPermission(tab.requiredPermission).pipe(map(hasPerm => ({ tab, hasPerm })))
                : of({ tab, hasPerm: true })
        )
    ).pipe(
        map(results => results.filter((item: any) => item.hasPerm).map((item: any) => item.tab))
    );
  }
}

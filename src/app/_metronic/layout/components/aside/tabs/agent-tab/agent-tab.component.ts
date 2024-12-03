import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../../../../environments/environment";

@Component({
  selector: 'app-agent-tab',
  templateUrl: './agent-tab.component.html',
  styleUrls: ['./agent-tab.component.scss'],
})
export class AgentTabComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }

    protected readonly environment = environment;
}

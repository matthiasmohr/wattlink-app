import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UsersTable } from './users.table';
import { AnfragenTable } from "./anfragen.table";
import { PartnerprofileTable } from "./partnerprofile.table";
import {MesslokationenTable} from "./messlokationen.table";
import {LastkurvenTable} from "./lastkurven.table";
import {NachrichtenTable} from "./nachrichten.table";


@Injectable({
  providedIn: 'root',
})
export class FakeAPIService implements InMemoryDbService {
  //constructor() {}

  /**
   * Create Fake DB and API
   */
  createDb() {
    return {
      anfragen: AnfragenTable.anfragen,
      messlokationen: MesslokationenTable.messlokationen,
      users: UsersTable.users,
      partnerprofile: PartnerprofileTable.partnerprofile,
      lastkurven: LastkurvenTable.lastkurven,
      nachrichten: NachrichtenTable.nachrichten,
    };
  }
}

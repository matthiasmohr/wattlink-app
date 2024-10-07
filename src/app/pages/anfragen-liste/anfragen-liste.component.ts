import { Component } from '@angular/core';
import {environment} from "../../../environments/environment";
import {FakeAPIService} from "../../_fake";
import {AnfragenApiService} from "../../shared/anfrage.service";
import {Anfrage} from "../../shared/Anfrage";
import {NgForOf} from "@angular/common";
import {AnfragenTable} from "../../_fake/anfragen.table";

@Component({
  selector: 'app-anfragen-liste',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './anfragen-liste.component.html',
  styleUrl: './anfragen-liste.component.scss'
})
export class AnfragenListeComponent {
  constructor(public anfragenApiService: AnfragenApiService) {}

  anfragen: Anfrage[];

  ngOnInit() {
    this.getAnfragen2();
  }
/*
  getAnfragen() {
    this.anfragenApiService.getAnfragen().subscribe(anfragen => {
      this.anfragen = anfragen
      console.log("Das ist die Anfrage:")
      console.log(anfragen)
    });
  }
*/
  getAnfragen2() {
    this.anfragenApiService.getAnfragen()
  }

  getAnfragenDirectly() {
    this.anfragen = AnfragenTable.anfragen
  }

  nix() {
    console.log("nix")
  }

}

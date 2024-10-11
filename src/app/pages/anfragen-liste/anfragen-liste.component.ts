import { Component, OnInit } from '@angular/core';
import {AnfragenApiService} from "../../shared/anfrage.service";
import {Anfrage} from "../../shared/Anfrage";
import {NgForOf} from "@angular/common";
import {tap} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-anfragen-liste',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './anfragen-liste.component.html',
  styleUrl: './anfragen-liste.component.scss'
})
export class AnfragenListeComponent implements OnInit {
  constructor(public anfragenApiService: AnfragenApiService, public http: HttpClient) {}

  anfragen: Anfrage[];

  ngOnInit() {
    this.getAnfragen();
  }

  getAnfragen() {
    this.anfragenApiService.getAnfragen().subscribe(response => {
      this.anfragen = response
    });
  }


  nix() {
    console.log("nix")
  }

}

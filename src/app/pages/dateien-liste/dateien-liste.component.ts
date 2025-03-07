import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthHelperService } from 'src/app/shared/authHelper.service';
import { Datei } from 'src/app/shared/Datei';
import { DateienApiService } from 'src/app/shared/datei.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { DateienCardComponent } from './dateien-card/dateien-card.component';

@Component({
  selector: 'app-dateien-liste',
  standalone: true,
  imports: [FormsModule, AsyncPipe, NgForOf, NgIf, InlineSVGModule, DateienCardComponent],
  templateUrl: './dateien-liste.component.html',
  styleUrls: ['./dateien-liste.component.scss']
})
export class DateienListeComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    public authHelperService: AuthHelperService,
    public dateienApiService: DateienApiService,
  ) {}

  anfrageID: any;
  dateien$: Observable<Datei[]>;
  isLoading: boolean;

  ngOnInit(): void {
    this.isLoading = true;
    this.getDateien();
  }

  getDateien() {
    this.authHelperService.isAgent().subscribe((isAgent: boolean) => {
      this.route.paramMap.subscribe(params => {
        this.anfrageID = params.get('id');
        if (!isAgent) {
          this.route.queryParamMap.subscribe(params => {
            // this.dateien$ = this.dateienApiService.getDateien(params.get('partnerprofil'), this.anfrageID);
          });
        } else {
          this.dateien$ = this.dateienApiService.getDateien(this.anfrageID);
        }
        this.isLoading = false;
      });
    });
  }

  downloadFile(dateiID: string, fileNameUser: string): void {
    this.dateienApiService.downloadDatei(dateiID).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileNameUser; // You can change this to a more appropriate file name if needed
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }
}
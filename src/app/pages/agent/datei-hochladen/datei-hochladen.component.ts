import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-dateien-liste',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './datei-hochladen.component.html',
  styleUrl: './datei-hochladen.component.scss'
})
export class DateiHochladenComponent {
  selectedFile: File | null = null;
  anfrageId: string = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.selectedFile && this.anfrageId) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('anfrageId', this.anfrageId);

      this.http.post('/api/upload', formData).pipe(
        catchError(this.handleError)
      ).subscribe(response => {
        console.log('Upload successful', response);
      });
    }
  }

  private handleError(error: HttpErrorResponse) {
    console.error('File upload failed', error);
    return throwError(error);
  }
}

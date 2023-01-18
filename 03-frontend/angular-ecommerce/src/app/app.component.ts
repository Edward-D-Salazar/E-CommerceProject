import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, first } from 'rxjs/operators';
import { interval, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ecommerce';

  // private source = interval(20000);

  // constructor(private _http: HttpClient) {
  //   this.source.subscribe(() => {
  //     this._http
  //       .get('http://localhost:8080/api/', { observe: 'response' })
  //       .pipe(
  //         first(),
  //         catchError(this.handleError)
  //       )
  //       .subscribe(
  //         resp => {
  //           if (resp.status === 0) {
  //             console.log(true);
  //           } else {
  //             console.log(false);
  //           }
  //         },
  //         err => console.log(err)
  //       );
  //   });
  // }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }
}

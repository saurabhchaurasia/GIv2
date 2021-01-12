import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable,of, throwError, pipe} from 'rxjs';
import {map, filter, catchError,mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  serverAuthUrl = 'http://localhost:61283/token';
  errorData:any;
  redirectUrl: string;

  constructor(private http: HttpClient) { }  

  Login(username: string, password: string) {
    var body = "username=" + username + "&password=" + password + "&grant_type=password"
    return this.http.post<any>( this.serverAuthUrl, body)
    .pipe(map(user => {
        if (user && user.access_token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          return ("LOGGED_IN")
        }
      })
      // catchError(this.handleError)
    );
  }

  IsLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  GetAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.access_token;
  }

  Logout() {
    localStorage.removeItem('currentUser');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}

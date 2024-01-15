import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private httpClient:HttpClient) { }

  _url = 'http://localhost:3000/enroll';

  enroll(user:User){
    return this.httpClient.post<any>(this._url, user)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(() => new Error(error.statusText));
  }
  
}

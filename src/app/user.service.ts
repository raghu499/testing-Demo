import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as Rollbar from 'rollbar';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl ='./assets/TitleData.json';
    //private apiUrl = 'https://localhost:8080/api/users';

 constructor(private http: HttpClient) { }

 getUsers(): Observable<User[]> {
   return this.http.get<User[]>(this.apiUrl)
     .pipe(
       retry(1),
       catchError(this.handleError)
     );
 }

 handleError(error) {
   let errorMessage = '';
   if (error.error instanceof ErrorEvent) {
     // client-side error
     errorMessage = `Error: ${error.error.message}`;
   } else {
     // server-side error
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
  //  window.alert(errorMessage);
   return throwError(errorMessage);
 }
}

import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest,HttpHeaders } from '@angular/common/http';
import { Observable, catchError,retry,throwError } from 'rxjs';
import { user } from 'src/app/classes/user';

@Injectable({
  providedIn: 'root'
})
export class GetCurrentUserService {

  baseURL='https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/'
  
  constructor(private http:HttpClient) { }

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
  };

 getUserPhones(userName:any):Observable<user>
  {//HTTP GET request
   return this.http.get<user>(this.baseURL+'/users/'+userName+'/ownedPhones.json').
   pipe(retry(1),catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

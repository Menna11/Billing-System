import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest,HttpEvent,HttpEventType, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, of, retry, tap, throwError } from 'rxjs';
import { user } from './user';
import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  baseurl='https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/'
  constructor(private http:HttpClient) { }

  httpOptions ={
    headers:new HttpHeaders({
      'Content-type': 'appplication/json',
      'Access-Control-Allow-Origin':'*'
    }),
  };

  getUserBill(displayname:any): Observable<user>
  {
    return this.http.get<user>(this.baseurl +'/users/' + displayname + '/Bills.json').pipe(retry(1), catchError(this.handleError));
  }

  getwaterunitcost():Observable<any>{
    return this.http.get<number>(this.baseurl+'/waterunitcost.json').pipe(retry(1), catchError(this.handleError));
  }
  getwaterbillstatus(displayname:any, month:any):Observable<any>
  {
    return this.http.get<string>(this.baseurl +'/users/' + displayname + '/Bills/waterbills/'+month+'.json').pipe(retry(1), catchError(this.handleError));
  }
  getownedphonenumber(displayname:any,id:any):Observable<user>
  {
    return this.http.get<user>(this.baseurl +'/users/' + displayname + '/ownedPhones/'+id+'.json')
  }
  getownedphonedetails(displayname:any,phone:any):Observable<user>
  {
    return this.http.get<user>(this.baseurl+'/users/'+displayname+'/phonebills/' + phone + '.json').pipe(retry(1), catchError(this.handleError));
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

import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest,HttpHeaders } from '@angular/common/http';
import { Observable, catchError,retry,throwError } from 'rxjs';
import { user } from 'src/app/classes/user';
import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AddNewPhoneService {

  constructor(private http:HttpClient) { 
    const auth=getAuth();
    if(auth.currentUser)
    {
      const dn=auth.currentUser.displayName;
      console.log("AUTHHHx"+dn)
    }
  }

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
  };

}

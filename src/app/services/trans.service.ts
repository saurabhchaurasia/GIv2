import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {ITrans} from './../models/itrans';
import{IInsurance} from './../models/IInsurance';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class TransService {
  url='http://localhost:61283/api/transaction/';
httpOptions={
  headers: new HttpHeaders ({'Content-Type':'application/json'})
}

  constructor(private http:HttpClient, private authService: AuthenticateService) { }
  
  getTrans(id:number):Observable<ITrans>{ 
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.get<ITrans>(this.url+"get/"+id,authHeaders);
  }
  getTransId():Observable<ITrans>{ 
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.get<ITrans>(this.url+"gettrans", authHeaders);
  }
  getAmount(id:number):Observable<IInsurance>{ 
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.get<IInsurance>(this.url+"getAmount/"+id, authHeaders);
  }
  addTrans(trans:any):Observable<ITrans>{
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.post<ITrans>(this.url+"Post/",trans,authHeaders);
  }
}

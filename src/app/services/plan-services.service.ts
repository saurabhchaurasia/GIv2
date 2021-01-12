import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable,of} from 'rxjs';
import{Plansdts} from './../models/insuranceModels';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class PlanServicesService {
  url="http://localhost:61283/api/Insurance/";
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };
  constructor(private http:HttpClient, private authService: AuthenticateService) { }
  addInsurance(INSURANCE:Plansdts):Observable<Plansdts>{
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.post<Plansdts>(this.url+"PostInsurance",INSURANCE,authHeaders);
  }
  getdata(id:number):Observable<any>{
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.get<any>(this.url+'getmotor/'+id, authHeaders);
  }
}

import { Injectable, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable,of} from 'rxjs';
import{Buydts} from './../models/motorModel';
import { AuthenticateService } from './authenticate.service';
@Injectable({
  providedIn: 'root'
})
export class BuyServicesService  {
  url="http://localhost:61283/api/Insurance/";
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };
  constructor(private http:HttpClient, private authService:AuthenticateService) { }
  addMotor(MOTOR:Buydts):Observable<Buydts>{
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.post<Buydts>(this.url+"PostMotor",MOTOR,authHeaders);
  }
  getdata(id:number):Observable<any>{
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.get<any>(this.url+'getMotorId/'+id,authHeaders);
  }
}

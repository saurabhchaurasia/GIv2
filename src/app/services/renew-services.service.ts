import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable,of} from 'rxjs';
import{Renewdts} from './../models/insuranceModel2';
import{Plansdts} from './../models/insuranceModels';
import { AuthenticateService } from './authenticate.service';
@Injectable({
  providedIn: 'root'
})
export class RenewServicesService {
  url="http://localhost:61283/api/Insurance/";
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };
  constructor(private http:HttpClient, private authService:AuthenticateService) { }
  getData():Observable<Renewdts[]>{
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.get<Renewdts[]>(this.url+"GetInsuranceDetails/",authHeaders)
  }
  getData1(id:number):Observable<Plansdts>{
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.get<Plansdts>(this.url+"GetInsuDetails/"+id, authHeaders)
  }
  editData(id:number,INSURANCE:Plansdts):Observable<Plansdts>{
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.put<Plansdts>(this.url+"PutInsurance/"+id,INSURANCE,authHeaders);
  }
}

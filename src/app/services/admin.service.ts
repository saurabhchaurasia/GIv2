import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {IAdmin} from './../models/IAdmin';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url='http://localhost:61283/api/admin/';
httpOptions={
  headers: new HttpHeaders ({'Content-Type':'application/json'})
}
  constructor(private http:HttpClient, private authService: AuthenticateService) { }

  //get pending claims for admin
  getClaimList():Observable<any[]>{
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.get<any[]>(this.url+"get",authHeaders);
  }

  //get all transactions for admin
  getTransList():Observable<any[]>{
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.get<any[]>(this.url+"GetTrans",authHeaders);
  }

  //Get single claim data for admin approval
  getData(id:number):Observable<IAdmin>{ 
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.get<IAdmin>(this.url+"get/"+id, authHeaders);
  }
  
  //Put single claim data by admin for approval
  editClaim(adm:IAdmin):Observable<IAdmin>{
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.put<IAdmin>(this.url+"Put/"+adm.ClaimId,adm,authHeaders);
}
}  

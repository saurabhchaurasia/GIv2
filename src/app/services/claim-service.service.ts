import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {IClaim} from './../models/iclaim';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class ClaimServiceService {
  url='http://localhost:61283/api/claim/';
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(private http:HttpClient, private authService: AuthenticateService) { }
  
  getNum():Observable<IClaim[]>{
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.get<IClaim[]>(this.url+"GetInsurance/", authHeaders);
  }
  addClaimDetails(claim:IClaim):Observable<IClaim>{
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.post<IClaim>(this.url+"/PostAddClaim",claim,authHeaders);
  }
  getData():Observable<IClaim[]>{
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.get<IClaim[]>(this.url+"GetClaimHistory/",authHeaders);
    }
}

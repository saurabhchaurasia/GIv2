import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClaim } from '../models/Iclaim';
import { IInsurance } from '../models/IInsurance';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(private http:HttpClient, private authService:AuthenticateService) { }

  url='http://localhost:61283/api/user/';

  getInsurances():Observable<IInsurance>{
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.get<IInsurance>(this.url+"GetInsuranceDetails/", authHeaders);
  }

  getClaims():Observable<IClaim>{
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.get<IClaim>(this.url+"GetClaimHistory/", authHeaders);
  }
}

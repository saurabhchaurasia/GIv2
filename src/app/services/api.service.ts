import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/registerModel';
import { Reset } from '../models/resetModel';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://localhost:61283/api"
  defaultHttpOptions={
    headers: new HttpHeaders({ 'Content-Type':'application/json' })
  };

  //what are these comments you added here

  //second line added to master branch.
  
  //What are you doing bro, this will not work
  
  constructor(private http: HttpClient, private authService : AuthenticateService) { }
  
  //I hope it will

  //I think this the last one.

  //No it is not.

  Register(user:Register):Observable<any>{
    return this.http.post<Register>(this.baseUrl + "/user/RegisterUser", user, this.defaultHttpOptions);
  }

  //But i dont feel like it is

  //This is clearly unacceptable
  // i dont think you need them


  GetEmailIdRegister(user:Register):Observable<any>{
    return this.http.post<string>(this.baseUrl + "/user/PostUserEmail", user, this.defaultHttpOptions);
  }

  //Yes I also think you wont need this.

  GetEmailIdReset(user:Reset):Observable<any>{
    return this.http.post<string>(this.baseUrl + "/user/PostUserEmail", user, this.defaultHttpOptions);
  }

  SetReset(user:Reset):Observable<any>{
    return this.http.post<string>(this.baseUrl + "/user/PostNewPassword", user, this.defaultHttpOptions);
  }

  GetRole():Observable<any>{
    let authHeaders = { headers: new HttpHeaders(
      {
        'Content-Type':'application/json', 
        'Authorization': "Bearer "+ this.authService.GetAuthorizationToken() 
      }
    )}
    return this.http.get<any>(this.baseUrl + "/user/RoleDetails", authHeaders);
  }

}

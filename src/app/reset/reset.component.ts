import { ConditionalExpr, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reset } from '../models/resetModel';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  captcha:string = "";
  resetmodelobject:Reset = {
    UserId:null,
    Email:null,
    DrivingLiscence:null,
    Password:null
  };

  show:boolean = false;
  retypePassword:string="";

  constructor(private api:ApiService, private router:Router) { }

  temp():void{
    this.show = true;
  }

  SubmitClick():Observable<any>{
    if(this.retypePassword != this.resetmodelobject.Password){
      alert("Both the password fields should be same")
      return ;
    }
    console.log(this.resetmodelobject)
    this.api.SetReset(this.resetmodelobject).subscribe((data:string)=>{
      if(data == "INCORRECT_DETAILS"){
        alert("Incorrect Licence No, Password is not changed.");
        return ;
      }
      alert("Password changed successfully")
      this.router.navigate(['/'])
    })
  }

  ResetClick():Observable<any>{
    if(this.captcha != "uHG8c") {
      alert("Please check captcha");
    }
    else{
      this.api.GetEmailIdReset(this.resetmodelobject).subscribe((data:any)=>{
        if(data == "NOT_FOUND"){
          alert("Please check the user details")
          return;
        }
        this.resetmodelobject.UserId = data;
        console.log(this.resetmodelobject);
        this.show = true;
        return;
      })
    }
    return ;
  }

  ngOnInit(): void {
    if(localStorage.getItem("loggedIn")=="true"){
      alert("Already Logged In")
      this.router.navigate(['/'])
    }
  }

}

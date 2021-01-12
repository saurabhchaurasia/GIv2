import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent implements OnInit {

  Email:string="";
  Password:string="";
  loggedIn:boolean = false;
  rememberme:boolean = true;

  constructor(private authService:AuthenticateService, private router:Router) { }

  LoginClick():void{
    this.authService.Login(this.Email, this.Password).subscribe((data: any)=>{
      if(data=="LOGGED_IN"){
        this.loggedIn = true;
        console.log("logged in")

        if(!this.rememberme){
          let t = new Date().getTime() + 10*60*1000 ;
          localStorage.setItem("timetologout", t.toString() )
        }else{
          localStorage.removeItem("timetologout")
        }

        window.location.replace("http://localhost:4200/")
      }
    }, ()=>{
      if(!this.loggedIn){
        alert("Invalid Credentials")
      }
    })
  }

  ForgotClick(){
    this.router.navigate(['/resetPassword'])
  }

  ngOnInit(): void {
    if(localStorage.getItem("loggedIn")=="true"){
      alert("Already Logged In")
      this.router.navigate(['/'])
    }
  }

}

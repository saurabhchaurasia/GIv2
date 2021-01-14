import { HttpClient } from '@angular/common/http';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../models/registerModel';
import { ApiService } from '../services/api.service';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registermodelobject:Register = {
    Name:null,
    DateOfBirth:null,
    Address:"",
    Email:null,
    ContactNo:null,
    DrivingLiscence:null,
    Password:null
  };
  address:string;city:string;state:string;zip:string;
  disabled: boolean = false;

  constructor(private api: ApiService, private router: Router, private authService: AuthenticateService) { }

  OnRegister(){
    this.registermodelobject.Address = this.address + " " + this.city + " " + this.state + " " + this.zip;

    if(!this.validate())
    {
      this.api.Register(this.registermodelobject).subscribe((data:any)=>
      {
        console.log(this.registermodelobject)
        console.log(data)
        this.authService.Login(data.Email, data.Password).subscribe((data: any)=>{

          if(data=="LOGGED_IN"){
            //delay here
            localStorage.setItem("desired","User");
            window.location.replace("http://localhost:4200/")
          }
        })
      })
    }
  }

  CheckEmail(){
    this.api.GetEmailIdRegister(this.registermodelobject).subscribe((data:any)=>{
      if(data == "NOT_FOUND"){
        this.disabled = false;
        return;
      }
      this.disabled = true;
      return ;
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem("loggedIn")=="true"){
      alert("Already Logged In")
      this.router.navigate(['/'])
    }
  }

  //====================================================================
  // Register Form Validation

  v_name:boolean;
  v_email:boolean;
  v_email_backend:boolean;
  v_password:boolean;
  v_contact:boolean;
  v_dob:boolean;
  v_licence:boolean;
  v_address:boolean;
  v_city:boolean;
  v_state:boolean;
  v_zip:boolean;

  validate():boolean{
    console.log("validate called " +this.v_name);

    this.v_name=false;
    this.v_email=false;
    this.v_email_backend=false;
    this.v_password=false;
    this.v_contact=false;
    this.v_dob=false;
    this.v_licence=false;
    this.v_address=false;
    this.v_city=false;
    this.v_state=false;
    this.v_zip=false;
    
    if(this.registermodelobject.Name==null || this.registermodelobject.Name.length<3){
      this.v_name=true;
    }
    if(this.registermodelobject.Email==null || !this.registermodelobject.Email.includes('@') || !this.registermodelobject.Email.endsWith(".com")){
      this.v_email=true;
    }
    if(this.registermodelobject.Password==null || this.registermodelobject.Password.length<8){
      this.v_password=true;
    }
    if(this.registermodelobject.ContactNo==null || this.registermodelobject.ContactNo/999999999 < 1){
      this.v_contact=true;
    }
    if(this.registermodelobject.DateOfBirth==null){
      this.v_dob=true;
    }
    if(this.registermodelobject.DrivingLiscence==null || this.registermodelobject.DrivingLiscence.length<8){
      this.v_licence=true;
    }
    if(this.address==null || this.address==""){
      this.v_address=true;
    }
    if(this.city==null || this.city==""){
      this.v_city=true;
    }
    if(this.state==null || this.state==""){
      this.v_state=true;
    }
    if(this.zip==null || this.zip==""){
      this.v_zip=true;
    }
    let x = (this.v_address || this.v_city || this.v_contact || this.v_dob || this.v_email || this.v_licence || this.v_name || this.v_password || this.v_state || this.v_zip);
    console.log(x);
    return x;
    //returns true if any field invalid
  }

}

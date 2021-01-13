import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Plansdts } from '../models/insuranceModels';
import{PlanServicesService } from '../services/plan-services.service';
import{ActivatedRoute} from '@angular/router'
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
  providers:[DatePipe]
})
export class PlanComponent implements OnInit {
INSURANCE:Plansdts={
  InsuranceId:null,
  Plans:null,
  Duration:null,
  Amount:null,
  PolicyStartDate:null,
PolicyEndDate:null,
//UserId:null,
  MotorId:null
};
Premium:any;
//Premium1:any;
cc:any;
vehicle:any;
Yr:any;
year:number;
age:any;
moto:any;
id:number;
PolicyEndDate1:string;
PolicyEndDate2:string;
PolicyEndDate3:string;
  constructor(private planservices:PlanServicesService,private router:Router,private Arouter:ActivatedRoute,private datePipe: DatePipe) { }
 
  AddInsurance(){
    this.planservices.addInsurance(this.INSURANCE).subscribe(()=>{
      // alert("Details added");
      console.log("Insurance details added");
      this.router.navigate(['/payment/'+this.INSURANCE.MotorId]);
    });
  }
  saveInsurance(INSURANCE:Plansdts):void{
    this.cc=localStorage.getItem("cc");
    console.log(this.cc);
     localStorage.removeItem("cc");
     this.vehicle=localStorage.getItem("VehicleType");
     console.log(this.vehicle);
     localStorage.removeItem("VehicleType");
     this.Yr=localStorage.getItem("Year");
     console.log(this.Yr);
     this.age=this.year-this.Yr;
     console.log(this.age);
     localStorage.removeItem("Year");
     
    this.INSURANCE=INSURANCE;
    if(this.INSURANCE.Duration=='1'){
      if(this.vehicle=='4Wheeler' && this.INSURANCE.Plans=='Comprehensive')
      {
        if(this.cc<="1000")
        {
          this.Premium=7500;
        }
        else if(this.cc<="2000" && this.cc>"1000"){
          this.Premium=10000;
        }
        else 
        this.Premium=15000;
      }
      else if(this.vehicle=='4Wheeler' && this.INSURANCE.Plans=='ThirdPartyLiability')
      {
        if(this.cc<="1000")
        {
          this.Premium=6000;
        }
        else if(this.cc<="2000" && this.cc>"1000"){
          this.Premium=8000;
        }
        else 
        this.Premium=12000;

      }
      else if(this.vehicle=='2Wheeler' && this.INSURANCE.Plans=='Comprehensive')
      {
        if(this.cc<="100")
        {
          this.Premium=1200;
        }
        else if(this.cc<="200" && this.cc>"100"){
          this.Premium=1800;
        }
        else if(this.cc<"500" && this.cc>"200"){
          this.Premium=2500;
        }
        else 
        this.Premium=5000;

      }
      else
      {
        if(this.cc<="100")
        {
          this.Premium=1000;
        }
        else if(this.cc<="200" && this.cc>"100"){
          this.Premium=1500;
        }
        else if(this.cc<"500" && this.cc>"200"){
          this.Premium=2300;
        }
        else 
        this.Premium=4000;

      }
      
     
      this.INSURANCE.Amount=this.Premium;
      //this.INSURANCE.Amount=1000;
      this.INSURANCE.PolicyEndDate=this.PolicyEndDate1;
    }
    else if (this.INSURANCE.Duration=='2') {
      if(this.vehicle=='4Wheeler' && this.INSURANCE.Plans=='Comprehensive')
      {
        if(this.cc<="1000")
        {
          this.Premium=7500;
        }
        else if(this.cc<="2000" && this.cc>"1000"){
          this.Premium=10000;
        }
        else 
        this.Premium=15000;
      }
      else if(this.vehicle=='4Wheeler' && this.INSURANCE.Plans=='ThirdPartyLiability')
      {
        if(this.cc<="1000")
        {
          this.Premium=6000;
        }
        else if(this.cc<="2000" && this.cc>"1000"){
          this.Premium=8000;
        }
        else 
        this.Premium=12000;

      }
      else if(this.vehicle=='2Wheeler' && this.INSURANCE.Plans=='Comprehensive')
      {
        if(this.cc<="100")
        {
          this.Premium=1200;
        }
        else if(this.cc<="200" && this.cc>"100"){
          this.Premium=1800;
        }
        else if(this.cc<"500" && this.cc>"200"){
          this.Premium=2500;
        }
        else 
        this.Premium=5000;

      }
      else
      {
        if(this.cc<="100")
        {
          this.Premium=1000;
        }
        else if(this.cc<="200" && this.cc>"100"){
          this.Premium=1500;
        }
        else if(this.cc<"500" && this.cc>"200"){
          this.Premium=2300;
        }
        else 
        this.Premium=4000;
      }
      

      this.INSURANCE.Amount=this.Premium*2;
      
      //this.INSURANCE.Amount=2000;
      this.INSURANCE.PolicyEndDate=this.PolicyEndDate2;
    } else {
      if(this.vehicle=='4Wheeler' && this.INSURANCE.Plans=='Comprehensive')
      {
        if(this.cc<="1000")
        {
          this.Premium=7500;
        }
        else if(this.cc<="2000" && this.cc>"1000"){
          this.Premium=10000;
        }
        else 
        this.Premium=15000;
        
      }
      else if(this.vehicle=='4Wheeler' && this.INSURANCE.Plans=='ThirdPartyLiability')
      {
        if(this.cc<="1000")
        {
          this.Premium=6000;
        }
        else if(this.cc<="2000" && this.cc>"1000"){
          this.Premium=8000;
        }
        else 
        this.Premium=12000;

      }
      else if(this.vehicle=='2Wheeler' && this.INSURANCE.Plans=='Comprehensive')
      {
        if(this.cc<="100")
        {
          this.Premium=1200;
        }
        else if(this.cc<="200" && this.cc>"100"){
          this.Premium=1800;
        }
        else if(this.cc<"500" && this.cc>"200"){
          this.Premium=2500;
        }
        else 
        this.Premium=5000;
      }
      else
      {
        if(this.cc<="100")
        {
          this.Premium=1000;
        }
        else if(this.cc<="200" && this.cc>"100"){
          this.Premium=1500;
        }
        else if(this.cc<"500" && this.cc>"200"){
          this.Premium=2300;
        }
        else 
        this.Premium=4000;
      }
      
      this.INSURANCE.Amount=this.Premium*3;
      //this.INSURANCE.Amount=3000;
      this.INSURANCE.PolicyEndDate=this.PolicyEndDate3;
    }
    
    INSURANCE.MotorId=this.moto.MotorId;
    this.AddInsurance();
  }

  ngOnInit(): void {

    if(localStorage.getItem("loggedIn")=="true"){
      if(localStorage.getItem('role')=='User'){
        var date = new Date();
        
        var year=date.getFullYear();
        this.year=year;
        var month=date.getMonth();
        var day=date.getDay();
        var c = new Date(year + 1, month, day);
        var d = new Date(year + 2, month, day);
        var e = new Date(year + 3, month, day);
        this.INSURANCE.PolicyStartDate=this.datePipe.transform(date,"yyyy-MM-dd");
        this.PolicyEndDate1=this.datePipe.transform(c,"yyyy-MM-dd");
        this.PolicyEndDate2=this.datePipe.transform(d,"yyyy-MM-dd");
        this.PolicyEndDate3=this.datePipe.transform(e,"yyyy-MM-dd");
        const id=+this.Arouter.snapshot.paramMap.get('id');
        this.id=id;
        this.planservices.getdata(id).subscribe((data)=>{
          this.moto=data;
        })
        return;
      }
      else{
        alert("You dont have permission to access this file")
        this.router.navigate(['/'])
      }
    }
    else{
      alert("Please Log In first")
      this.router.navigate(['/'])
    }

  }

}

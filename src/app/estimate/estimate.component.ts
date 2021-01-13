import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})
export class EstimateComponent implements OnInit {

  alert:boolean=false;
  vehtype:number;
  plan:number;
  plan1:number;
  age:number;
  price:number;
  premium:number=0;
  Premium:any;

cc:any;
vehicle:any;
Yr:any;
year:number;
Duration:any;
Amount:any;
Plans:any;

  CalcPremium()
  {
    if(this.Duration=='1'){
      if(this.vehicle=='4Wheeler' && this.Plans=='Comprehensive')
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
      else if(this.vehicle=='4Wheeler' && this.Plans=='ThirdPartyLiability')
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
      else if(this.vehicle=='2Wheeler' && this.Plans=='Comprehensive')
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
      
     
      this.Amount=this.Premium;
      //this.INSURANCE.Amount=1000;
     // this.INSURANCE.PolicyEndDate=this.PolicyEndDate1;
    }
    else if (this.Duration=='2') {
      if(this.vehicle=='4Wheeler' && this.Plans=='Comprehensive')
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
      else if(this.vehicle=='4Wheeler' && this.Plans=='ThirdPartyLiability')
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
      else if(this.vehicle=='2Wheeler' && this.Plans=='Comprehensive')
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
      

      this.Amount=this.Premium*2;
      
      //this.INSURANCE.Amount=2000;
     // this.INSURANCE.PolicyEndDate=this.PolicyEndDate2;
    } else {
      if(this.vehicle=='4Wheeler' && this.Plans=='Comprehensive')
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
      else if(this.vehicle=='4Wheeler' && this.Plans=='ThirdPartyLiability')
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
      else if(this.vehicle=='2Wheeler' && this.Plans=='Comprehensive')
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
      
      this.Amount=this.Premium*3;
      //this.INSURANCE.Amount=3000;
     // this.INSURANCE.PolicyEndDate=this.PolicyEndDate3;
    }
      
    this.alert=true;
  }

  closeAlert()
  {
    this.alert=false;
  }

  constructor() { }


  ngOnInit(): void {
  }

}

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
// UserId:null,
  MotorId:null
};
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
    this.INSURANCE=INSURANCE;
    if(this.INSURANCE.Duration=='1'){
      this.INSURANCE.Amount=1000;
      this.INSURANCE.PolicyEndDate=this.PolicyEndDate1;
    }
    else if (this.INSURANCE.Duration=='2') {
      this.INSURANCE.Amount=2000;
      this.INSURANCE.PolicyEndDate=this.PolicyEndDate2;
    } else {
      this.INSURANCE.Amount=3000;
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

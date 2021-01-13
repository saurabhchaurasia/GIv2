import { Component, OnInit } from '@angular/core';
import{RenewServicesService} from '../services/renew-services.service';
import{Plansdts} from './../models/insuranceModels';
import{ActivatedRoute,Router} from '@angular/router';
import { DatePipe } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-renew2',
  templateUrl: './renew2.component.html',
  styleUrls: ['./renew2.component.css'],
  providers:[DatePipe]
})
export class Renew2Component implements OnInit {
  INSURANCE:Plansdts;
id:number;
age:any;
PolicyEndDate1:string;
PolicyEndDate2:string;
PolicyEndDate3:string;
Premium:any;


  constructor(private Renewservice:RenewServicesService,private Arouter:ActivatedRoute,private router:Router,private datePipe: DatePipe) { }
  getData(id:number){
    this.Renewservice.getData1(id).subscribe((data:Plansdts) => {
      this.INSURANCE=data;
      console.log(this.INSURANCE);
    })
  }
  EditInsurance(){
    console.log(this.INSURANCE)
    this.Renewservice.editData(this.id,this.INSURANCE).subscribe(()=>{
    // alert("Your Insurance is Renewed");
    console.log("insurance details renewed, redirecting to paymant page")
    this.router.navigate(['/payment/'+this.INSURANCE.MotorId]);
    })
  }
  SaveInsurance(INSURANCE:Plansdts):void{
    
    this.INSURANCE=INSURANCE;
    
    console.log(this.INSURANCE.Plans);
    
    if(this.INSURANCE.Duration=='1'){
      this.INSURANCE.Amount=Math.floor((Math.random() * 2000) + 1000);
      this.INSURANCE.PolicyEndDate=this.PolicyEndDate1;
    }
    else if (this.INSURANCE.Duration=='2') {
      this.INSURANCE.Amount=Math.floor((Math.random() * 3000) + 2000);
      this.INSURANCE.PolicyEndDate=this.PolicyEndDate2;
    } else {
      this.INSURANCE.Amount=Math.floor((Math.random() * 4000) + 3000);
      this.INSURANCE.PolicyEndDate=this.PolicyEndDate3;
    }
    this.EditInsurance();
  }

  ngOnInit(): void {
    console.log(Math.floor((Math.random() * 100) + 1));

    if(localStorage.getItem("loggedIn")=="true"){
      if(localStorage.getItem('role')=='User'){

        var date = new Date();
        var year=date.getFullYear();
        var month=date.getMonth();
        var day=date.getDay();
        var c = new Date(year + 1, month, day);
        var d = new Date(year + 2, month, day);
        var e = new Date(year + 3, month, day);
        //this.INSURANCE.PolicyStartDate=this.datePipe.transform(date,"yyyy-MM-dd");
        this.PolicyEndDate1=this.datePipe.transform(c,"yyyy-MM-dd");
        this.PolicyEndDate2=this.datePipe.transform(d,"yyyy-MM-dd");
        this.PolicyEndDate3=this.datePipe.transform(e,"yyyy-MM-dd");
        const id=+this.Arouter.snapshot.paramMap.get('id'); 
        this.id=id;
        this.getData(id);
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

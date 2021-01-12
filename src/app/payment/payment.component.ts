import { Component, OnInit } from '@angular/core';
import{TransService} from './../services/trans.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ITrans} from './../models/itrans';
import{ITicket} from './../models/ITicket';
import{IInsurance} from './../models/IInsurance';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  trans:ITrans={Amount:null,Date:null,TransactionId:null};
  Ins:IInsurance={Amount:null,InsuranceId:null,MotorId:null,PolicyStartDate:null,PolicyEndDate:null,Duration:null,Plans:null};
 
  constructor(private transservice:TransService,private router:Router,private route:ActivatedRoute) { }
  
  getInsInfo(id:number){
    this.transservice.getAmount(id).subscribe((data:IInsurance)=>{
      this.Ins=data;
    });
  }

  addTrans(){
    let postTrans = {
      Amount: this.trans.Amount
    }
    console.log(postTrans)
    this.transservice.addTrans(postTrans).subscribe(
      (data)=>{
        console.log(data)
        this.trans.Amount = data.Amount;
        this.trans.Date = data.Date;
        this.trans.TransactionId = data.TransactionId;
        // alert("Click Here To Get Ticket");
        console.log("Payment successful, redirecting to ticket page")
        // this.getTransId();
        this.router.navigate(['/ticket/'+this.trans.TransactionId]);
      });
  }
  // getTransId(){
  //   this.transservice.getTransId().subscribe((data:ITrans)=>{
  //     this.trans=data;
  //     this.router.navigate(['/ticket/'+this.trans.TransactionId]);
  //   });
  // }
  saveData(): void{
    //  this.trans.UserId=this.Ins.UserId;
     this.trans.Amount=this.Ins.Amount;
     //this.trans.UserId=4;
    //this.trans.Amount=5000;
     this.addTrans();
   }

  ngOnInit(): void {
    if(localStorage.getItem("loggedIn")=="true"){
      if(localStorage.getItem('role')=='User'){

        const id=+this.route.snapshot.paramMap.get('id'); //+ for converting to string type(concatanation)
        this.getInsInfo(id);
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {IClaim} from './../models/Iclaim';
import {ClaimServiceService} from './../services/claim-service.service';
@Component({
  selector: 'app-claim-insurance',
  templateUrl: './claim-insurance.component.html',
  styleUrls: ['./claim-insurance.component.css']
})
export class ClaimInsuranceComponent implements OnInit {
  claim:IClaim={
    ClaimId:null,
    ClaimDate:null,
    ApprovalStatus:null,
    ClaimAmount:null,
    ReasonToClaim:null,
    InsuranceId:null,
    Plans:null,
    MotorId:null,
    UserId:null
  };
 
  insurancelist:IClaim[];

  constructor(private claimservice : ClaimServiceService,private router:Router,private route:ActivatedRoute) {}

  getinsuranceNum():void{
      this.claimservice.getNum().subscribe((data:IClaim[])=>{
        this.insurancelist=data;
      })
    }
    
  addClaim(){
    this.claimservice.addClaimDetails(this.claim).subscribe(
      ()=>{
        console.log(this.claim)
        //alert("submitted succesfully");
        this.router.navigate(['/history']);
      }
    );
  }

  saveClaim(claim:IClaim):void
  { 
    this.claim=claim;
    this.addClaim();
  }

   ngOnInit(): void {
    if(localStorage.getItem("loggedIn")=="true"){
      if(localStorage.getItem('role')=='User'){

        this.getinsuranceNum();
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

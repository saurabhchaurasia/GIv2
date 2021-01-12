import { Component, OnInit } from '@angular/core';

import { ProfileServiceService } from './../services/profile-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IInsurance } from './../models/iinsurance';
import { IClaim } from './../models/iclaim';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  insurancelist:IInsurance={InsuranceId:null,Plans:null,PolicyEndDate:null,PolicyStartDate:null,Amount:null,Duration:null,MotorId:null};
  claimlist:IClaim={ClaimAmount:null,ClaimDate:null,ClaimId:null,ReasonToClaim:null,ApprovalStatus:null,InsuranceId:null,UserId:null,Plans:null, MotorId:null};

  constructor(private service:ProfileServiceService,private router:Router) { }

  getInsurancesInfo()
  { 
    this.service.getInsurances().subscribe((data:IInsurance)=>{this.insurancelist=data;});
    this.service.getClaims().subscribe((data:IClaim)=>{this.claimlist=data;});
  }

  ngOnInit(): void {

    if(localStorage.getItem("loggedIn")=="true"){
      if(localStorage.getItem('role')=='User'){

        this.getInsurancesInfo(); 
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

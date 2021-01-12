import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IClaim } from '../models/Iclaim';
import {ClaimServiceService} from './../services/claim-service.service';

@Component({
  selector: 'app-claim-history',
  templateUrl: './claim-history.component.html',
  styleUrls: ['./claim-history.component.css']
})
export class ClaimHistoryComponent implements OnInit {
claimlist:IClaim[];
claim:IClaim;
  constructor(private claimservice:ClaimServiceService, private router:Router) { }
  
  getHistory(){
    this.claimservice.getData().subscribe((data:IClaim[])=>{
      this.claimlist=data;
    })
  }

  ngOnInit(): void {

    if(localStorage.getItem("loggedIn")=="true"){
      if(localStorage.getItem('role')=='User'){

        this.getHistory()
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

import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{RenewServicesService} from '../services/renew-services.service';
import{Renewdts} from './../models/insuranceModel2';
import{ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-renew',
  templateUrl: './renew.component.html',
  styleUrls: ['./renew.component.css']
})
export class RenewComponent implements OnInit {
  InsuranceDataList:Renewdts[];

  constructor(private Renewservice:RenewServicesService,private router:Router,private Arouter:ActivatedRoute) { }
GetInsuranceData(){
  this.Renewservice.getData().subscribe((data:Renewdts[])=>{
    this.InsuranceDataList=data;
  })
}
  ngOnInit(): void {

    if(localStorage.getItem("loggedIn")=="true"){
      if(localStorage.getItem('role')=='User'){

            // const id= 8
        this.GetInsuranceData()
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

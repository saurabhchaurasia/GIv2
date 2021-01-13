import { Component, OnInit } from '@angular/core';
import{AdminService} from './../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router'
import {IAdmin} from './../models/IAdmin';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  adm:IAdmin={ClaimId:null,ClaimAmount:null,ClaimDate:null,ReasonToClaim:null,ApprovalStatus:null,ManufactureYear:null,Model:null,Plans:null,Type:null};
  constructor(private adminservice:AdminService,private router:Router,private route:ActivatedRoute) { }

  getClaimInfo(id:number){
    this.adminservice.getData(id).subscribe((data:IAdmin)=>{
      this.adm=data;
    });
  }
  editClaim(){
    this.adminservice.editClaim(this.adm).subscribe( 
      ()=>{
        //alert ("Record Edited");
        this.router.navigate(['/admin'])
      });
  }

  saveData(adm:IAdmin)
  {
    this.adm=adm;
    this.editClaim();
  }

  ngOnInit(): void {
    if(localStorage.getItem("loggedIn")=="true"){
      if(localStorage.getItem('role')=='Admin'){

        const id=+this.route.snapshot.paramMap.get('id'); //+ for converting to string type(concatanation)
        this.getClaimInfo(id);
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

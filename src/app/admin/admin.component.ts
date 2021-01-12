import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{AdminService} from './../services/admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  translist:any[];
  
  constructor(private adminservice:AdminService, private router:Router) {  
  };
  
  ngOnInit(): void {
    if(localStorage.getItem("loggedIn")=="true"){
      if(localStorage.getItem('role')=='Admin'){

        this.adminservice.getClaimList().subscribe((data)=>{this.translist=data;})
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

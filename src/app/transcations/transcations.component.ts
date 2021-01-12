import { Component, OnInit } from '@angular/core';
import{TransService} from './../services/trans.service';
import{AdminService} from './../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transcations',
  templateUrl: './transcations.component.html',
  styleUrls: ['./transcations.component.css']
})
export class TranscationsComponent implements OnInit {
  translist:any[];
  constructor(private adminservice:AdminService, private router:Router) { }
  
  ngOnInit(): void {
    if(localStorage.getItem("loggedIn")=="true"){
      if(localStorage.getItem('role')=='Admin'){
        
        this.adminservice.getTransList().subscribe((data)=>{this.translist=data;})
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

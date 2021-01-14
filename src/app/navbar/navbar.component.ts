import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  name:string;
  role:string;
  loggedIn:boolean;

  constructor(private apiService: ApiService,private authService: AuthenticateService, private router: Router){}

  DoLogout(){
    console.log("Logged Out");
    this.authService.Logout();
    localStorage.removeItem('role');
    localStorage.setItem("loggedIn", "false");
    window.location.replace("http://localhost:4200/");
  }
  OpenUserProfile(){
    this.router.navigate(['/profile'])
  }
  OpenAdminProfile(){
    this.router.navigate(['/admin'])
  }

  ngOnInit() {
    if(this.authService.IsLoggedIn()){

      let timetologout = Number.parseInt(localStorage.getItem("timetologout"))
      if(new Date().getTime() > timetologout){
        this.DoLogout()
      }

      this.apiService.GetRole().subscribe((data)=>{
        this.name = data.Name;
        this.role = data.Role;
        localStorage.setItem("role",this.role);
        localStorage.setItem("loggedIn", "true");
        this.loggedIn = true;
        let desired=localStorage.getItem("desired");
        if(desired!=data.Role){
          alert("You do not have "+desired+" Privileges");
        }
      })
    }else{
      this.loggedIn = false;
    }
  }

}

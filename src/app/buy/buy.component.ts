import { Component, OnInit } from '@angular/core';
import{Buydts} from './../models/motorModel';
import{Router} from '@angular/router';
import{FormsModule} from '@angular/forms';
import{BuyServicesService} from '../services/buy-services.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
MOTOR:Buydts={
  ManufactureYear:null,
  Model:null,
  Type:null,
  PurchaseDate:null,
  Regno:null,
  EngineNo:null,
  ChasisNo:null,
  // UserId:null
};
  constructor(private buyservices:BuyServicesService,private router:Router) { }
    AddMotor(){
      this.buyservices.addMotor(this.MOTOR).subscribe(()=>{
        console.log("motor added")
        this.router.navigate(['/plan/'+this.MOTOR.ChasisNo]);  
      });
    }
    saveMotor(MOTOR:Buydts):void{
      this.MOTOR=MOTOR;
      // this.MOTOR.UserId=6;
      this.AddMotor();
    }

  ngOnInit(): void {
    if(localStorage.getItem("loggedIn")=="true"){
      if(localStorage.getItem('role')=='User'){

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

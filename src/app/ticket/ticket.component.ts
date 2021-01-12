import { Component, OnInit } from '@angular/core';
import{TransService} from './../services/trans.service';
import {ActivatedRoute, Router} from '@angular/router'
import{ITicket} from './../models/ITicket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  transdata:ITicket={TransactionId:null,UserId:null,Amount:null,Date:null,Name:null,Address:null,Plans:null,PolicyEndDate:null,PolicyStartDate:null};
  constructor(private transservice:TransService,private Arouter:ActivatedRoute, private router: Router) {  }
  getDeptInfo(id:number){
    this.transservice.getTrans(id).subscribe((data:ITicket)=>{
      this.transdata=data;
    })
  }

  ngOnInit(): void {

    if(localStorage.getItem("loggedIn")=="true"){
      if(localStorage.getItem('role')=='User'){

        const id=+this.Arouter.snapshot.paramMap.get('id'); //+ for converting to string type(concatanation)
        this.getDeptInfo(id);
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

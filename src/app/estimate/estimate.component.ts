import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})
export class EstimateComponent implements OnInit {

  alert:boolean=false;
  vehtype:number;
  plan:number;
  age:number;
  price:number;
  premium:number=0;

  CalcPremium()
  {
    if(this.vehtype==1)
    {
      if(this.plan==1)
        this.premium += 100;
      else if(this.plan==2)
        this.premium += 200;

      if(this.age<=5)
        this.premium=this.price-(this.price*0.92);
      else if(this.age>5 && this.age<=10)
        this.premium=this.price-(this.price*0.94);
      else if(this.age>10)
        this.premium=this.price-(this.price*0.96);
    }
    else if(this.vehtype==2)
    {
      if(this.plan==1)
        this.premium += 200;
      else if(this.plan==2)
        this.premium += 400;
        
      if(this.age<=5)
        this.premium=this.price-(this.price*0.92);
      else if(this.age>5 && this.age<=10)
        this.premium=this.price-(this.price*0.94);
      else if(this.age>10)
        this.premium=this.price-(this.price*0.96);
    }
    this.alert=true;
  }

  closeAlert()
  {
    this.alert=false;
  }

  constructor() { }


  ngOnInit(): void {
  }

}

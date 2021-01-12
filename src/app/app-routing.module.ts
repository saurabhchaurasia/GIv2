import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { BuyComponent } from './buy/buy.component';
import { ClaimHistoryComponent } from './claim-history/claim-history.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { EstimateComponent } from './estimate/estimate.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { PlanComponent } from './plan/plan.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RenewComponent } from './renew/renew.component';
import { Renew2Component } from './renew2/renew2.component';
import { ResetComponent } from './reset/reset.component';
import { TicketComponent } from './ticket/ticket.component';
import { TranscationsComponent } from './transcations/transcations.component';

const routes: Routes = [
  {path:'login', component:AuthorizeComponent},
  {path:'register', component:RegisterComponent},
  {path:'resetPassword', component:ResetComponent},
  {path:'home', component:HomeComponent},
  {path:'admin', component:AdminComponent},
  {path:'profile', component:ProfileComponent},
  {path:'buy', component:BuyComponent},
  {path:'renew',component:RenewComponent},
  {path:'transactions',component:TranscationsComponent},
  {path:'help',component:HelpComponent},
  {path:'estimate',component:EstimateComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'admin-edit/:id',component:AdminEditComponent},
  {path:'claim',component:ClaimInsuranceComponent},
  {path:'history',component:ClaimHistoryComponent},
  {path:'plan/:id',component:PlanComponent},
  {path:'renew2/:id',component:Renew2Component},
  {path:'ticket/:id',component:TicketComponent},
  {path:'payment/:id', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

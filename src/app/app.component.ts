import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';
import { AuthenticateService } from './services/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GI';
  
}

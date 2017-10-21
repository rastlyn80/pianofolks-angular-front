import { AuthService } from './../services/auth.service';
import { Angular2TokenService } from 'angular2-token';
import { AuthDialogComponent } from './../auth-dialog/auth-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  constructor(public authService:AuthService, public authTokenService:Angular2TokenService, private router:Router) {} 
  
    ngOnInit(){}
  
    logOut(){
      this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
    }
    

  open(mode?: 'login'|'register') {
    this.authDialog.open(mode);
  }

  username() {
    if(this.authTokenService.currentUserData) {
      return this.authTokenService.currentUserData.name;      
    } else {
      return "";
    }
  }

}

import { AuthService } from './../services/auth.service';
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

  constructor(public authService:AuthService, private router:Router) {}
  
    ngOnInit(){}
  
    logOut(){
      this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
    }
  

  open(mode?: 'login'|'register') {
    this.authDialog.open(mode);
  }

}

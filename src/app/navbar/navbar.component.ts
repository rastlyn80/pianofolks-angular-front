import { Angular2TokenService } from 'angular2-token';
import { AuthDialogComponent } from './../auth-dialog/auth-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  constructor(public tokenAuthService:Angular2TokenService) { }

  ngOnInit() {
  }

  open(mode?: 'login'|'register') {
    this.authDialog.open(mode);
  }

}

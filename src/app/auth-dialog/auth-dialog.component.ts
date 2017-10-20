import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})

export class AuthDialogComponent implements OnInit {
  @Input('auth-mode') authMode: 'login' | 'register' = 'login';
  @ViewChild('modalform') input: TemplateRef<AuthDialogComponent>;
  

  constructor(private modalService: NgbModal) { }

  open(mode: 'login'| 'register' = 'login') {
    this.authMode = mode;
    this.modalService.open(this.input);
  }

  ngOnInit() {
  }

  isLoginMode() {return this.authMode == 'login'}
  isRegisterMode() {return this.authMode == 'register'}

}

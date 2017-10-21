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
  modalReference: any; 


  onLoginFormResult(e){
    
    if(e.signedIn) {      
      this.modalReference.close();
    }

    else {
      alert(e.err.json().errors[0])
    }
  }

  onRegisterFormResult(e){
    
    if(e.signedUp) {      
      this.modalReference.close();
    }

    else {
      alert(e.err.json().errors.full_messages[0])
    }
  }

  open(mode: 'login'| 'register' = 'login') {
    this.authMode = mode;
    this.modalReference = this.modalService.open(this.input);
  }

  ngOnInit() {
  }

  isLoginMode() {return this.authMode == 'login'}
  isRegisterMode() {return this.authMode == 'register'}

}

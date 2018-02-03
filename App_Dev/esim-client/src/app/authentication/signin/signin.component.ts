import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { slideInAnimation } from './../../animations/index';
import { AuthenticationService } from './../services/index';
import { ModalDialogComponent } from './../../shared/components/index';
import { SessionService } from '../../shared/services/index';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  animations: [slideInAnimation],
  host: { '[@slideInAnimation]': '' }
})
export class SigninComponent implements OnInit {

  public userLoginForm: FormGroup;
  constructor(private authenticationService: AuthenticationService
    ,private sessionService:SessionService
    , private router: Router
    , private dialog: MatDialog
    , fb: FormBuilder) {
    this.userLoginForm = fb.group({
      'emailId': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    return this.userLoginForm.controls['emailId'].hasError('required') ?
      'You must enter an Email Id' :
      this.userLoginForm.controls['emailId'].hasError('email') ?
        'Not valid Email'
        : '';
  }

  SignIn() {
    let Credential = {
      LoginID: this.userLoginForm.controls['emailId'].value,
      Password: this.userLoginForm.controls['password'].value,
      IsAdmin:false //Added by Arun
    };
    this.authenticationService.SignIn(Credential).subscribe(
      (result: any) => {
        if (result.res == "2") {
          this.dialog.open(ModalDialogComponent, {
            data: {
              Message: 'Invalid Password. Please reenter details.',
              Buttons: 1
            }
          });
        }
        else if (result.res == "3") {
          this.dialog.open(ModalDialogComponent, {
            data: {
              Message: 'Invalid EmailID. Please reenter details.',
              Buttons: 1
            }
          });
        }
        else {
          sessionStorage["EmailID"]=Credential.LoginID;
          sessionStorage["UserID"] = result.res;
          this.sessionService.update(result);
          this.router.navigate(['/user'])
        }
      },
      err => console.log(err)
    )
  }
}

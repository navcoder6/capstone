import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';//Added by Arun
import { slideInAnimation } from './../../animations/index';
import { AuthenticationService } from './../services/index'; //Added by Arun
import { ModalDialogComponent } from './../../shared/components/index';//Added by Arun
import { MatDialog } from '@angular/material';//Added by Arun
import { SessionService } from '../../shared/services/index';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
  animations: [slideInAnimation],
  host: { '[@slideInAnimation]': '' }
})
export class LoginAdminComponent implements OnInit {

  public adminLoginForm: FormGroup;

  constructor(private _SignInService: AuthenticationService //Added by Arun
    ,private sessionService:SessionService
    , private router: Router//Added by Arun
    , private dialog: MatDialog//Added by Arun
    , fb: FormBuilder) {
    this.adminLoginForm = fb.group({
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  SignIn() {
    let Credential = {
      LoginID: null,
      Password: this.adminLoginForm.controls['password'].value,
      IsAdmin: true
    };
    this._SignInService.SignIn(Credential, true).subscribe(
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
              Message: 'Admin credential does not exist.',
              Buttons: 1
            }
          });
        }
        else {
          sessionStorage["EmailID"] = Credential.LoginID;
          sessionStorage["UserID"] = result.res;

          this.sessionService.update(result);
          this.router.navigate(['/admin'])
        }
      },
      err => console.log(err)
    )
  } //Added by Arun
}

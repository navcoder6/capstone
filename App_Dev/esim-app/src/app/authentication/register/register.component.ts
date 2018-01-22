import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { slideInAnimation } from './../../animations/index';
import { RegistrationService } from './../services/index';
import { ModalDialogComponent } from './../../shared/components/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [slideInAnimation],
  host: { '[@slideInAnimation]': '' }
})
export class RegisterComponent implements OnInit {
  public passwordHide: boolean = true;
  public registrationForm: FormGroup;

  constructor(private _RegisterService: RegistrationService
    , private router: Router
    , private dialog: MatDialog
    , fb: FormBuilder) {
    this.registrationForm = fb.group({
      'firstName': ['', Validators.required],
      'lastName': [''],
      'emailId': ['', [Validators.required, Validators.email]],
      'location': ['', Validators.required],
      'password': ['', Validators.required],
      'mobileNumber': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    return this.registrationForm.controls['emailId'].hasError('required') ?
      'You must enter an Email Id' :
      this.registrationForm.controls['emailId'].hasError('email') ?
        'Not valid Email'
        : '';
  }

  RegisterUser() {
    let newProfile = {
      FirstName: this.registrationForm.controls['firstName'].value,
      LastName: this.registrationForm.controls['lastName'].value,
      EmailID: this.registrationForm.controls['emailId'].value,
      Password: this.registrationForm.controls['password'].value,
      Location: this.registrationForm.controls['location'].value,
      MobileNum: this.registrationForm.controls['mobileNumber'].value,
      CreatedOn: new Date()
    };
    console.log(newProfile);
    this._RegisterService.addUserProfile(newProfile).subscribe(
      (result: any) => {
        if (result.res == "1") {
          let dialogRef = this.dialog.open(ModalDialogComponent, {
            data: {
              Message: 'User profile created. Please Log in with new credentials',
              Buttons: 1
            }
          })
          // alert("User Successfully Registered.");
          dialogRef.afterClosed().subscribe(() => {
            this.router.navigate(['/']);
          });
        }
        else {
          this.dialog.open(ModalDialogComponent, {
            data: {
              Message: 'Email ID already exist for some other user!!!',
              Buttons: 1
            }
          })
        }
      },
      err => console.log(err))
  }
}

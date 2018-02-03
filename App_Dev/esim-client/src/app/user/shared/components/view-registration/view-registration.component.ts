import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

import {RegistrationService} from './../../../../authentication/services/index';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  public passwordHide:boolean = true;
  public registrationForm: FormGroup;
  public RegDetails:any = {};
  constructor(private registrationService: RegistrationService
    ,fb:FormBuilder) {
    this.registrationForm = fb.group({
      'firstName':['',Validators.required],
      'lastName':[''],
      'emailId':['',[Validators.required,Validators.email]],
      'location':['',Validators.required],
      'mobileNumber':['',Validators.required]
    });
    this.registrationForm.disable();
  }

  ngOnInit() {
    this.registrationService.getRegistrationDetails(sessionStorage["EmailID"]).subscribe(
      (RegDetails:any) =>  this.RegDetails=RegDetails,
      err => console.log(err)
    );
  }

}

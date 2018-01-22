import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { MatDialog } from '@angular/material';

import {scaleInOutAnimation} from './../../../animations/index';
import {ModalDialogComponent} from './../../../shared/components/index';

@Component({
  selector: 'app-new-security-incident',
  templateUrl: './new-security-incident.component.html',
  styleUrls: ['./new-security-incident.component.css'],
  animations:[scaleInOutAnimation],
  host:{'[@scaleInOutAnimation]':''}
})
export class NewSecurityIncidentComponent implements OnInit {
  public registrationForm: FormGroup;
  constructor(private location:Location,
    private dialog:MatDialog,
    fb:FormBuilder) {
    this.registrationForm = fb.group({
      'firstName':['nav',Validators.required],
      'lastName':['ver'],
      'emailId':[{value:'n@n.com',disabled:true},[Validators.required,Validators.email]],
      'mobileNumber':['1234567890',Validators.required]
    });
   }

  ngOnInit() {
  }

   /**This is the method that gets called when SoS is sent */
   public SendSoS(){
    //console.log(service);
    let dialogRef =this.dialog.open(ModalDialogComponent,{
      data:{
        Message: 'Thanks.Your incident is reported successfully',
        Buttons:1
      }
    });

    dialogRef.afterClosed()
    .subscribe(()=>{
      this.location.back();  
    })
  }

  Cancel(){
    this.location.back();
  }
}

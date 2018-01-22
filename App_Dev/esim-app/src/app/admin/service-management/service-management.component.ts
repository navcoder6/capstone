import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { MatDialog } from '@angular/material';

import {scaleInOutAnimation} from './../../animations/index';
import {ModalDialogComponent} from './../../shared/components/index';
import {EsimService} from './../../shared/services//index';

@Component({
  selector: 'app-service-management',
  templateUrl: './service-management.component.html',
  styleUrls: ['./service-management.component.css'],
  animations:[scaleInOutAnimation],
  host:{'[@scaleInOutAnimation]':''}
})
export class ServiceManagementComponent implements OnInit {
  public serviceregForm: FormGroup;
  constructor(private location:Location,private _EsimService: EsimService,
    private dialog:MatDialog,
    fb:FormBuilder) {
    this.serviceregForm = fb.group({
      'deptName':['',Validators.required],
      'emailId':['',[Validators.required,Validators.email]],
      'mobileNumber':['',Validators.required]
    });
   }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    return this.serviceregForm.controls['emailId'].hasError('required') ?
      'You must enter an Email Id' :
      this.serviceregForm.controls['emailId'].hasError('email') ?
        'Not valid Email'
        : '';
  }
   /**This is the method that gets called when service form is submit */
   public SaveService(){
    let newService = {
      DepartmentName: this.serviceregForm.controls['deptName'].value,
      EmailID: this.serviceregForm.controls['emailId'].value,
      MobileNum: this.serviceregForm.controls['mobileNumber'].value,
      CreatedOn: new Date()
    };
    console.log(newService);
    this._EsimService.addNewService(newService).subscribe(
      (result: any) => {
        if (result.res == "1") {
          let dialogRef = this.dialog.open(ModalDialogComponent, {
            data: {
              Message: 'Service saved successfully.',
              Buttons: 1
            }
          })
          // alert("User Successfully Registered.");
          dialogRef.afterClosed().subscribe(() => {
            this.location.back(); 
          });
        }
        else {
          this.dialog.open(ModalDialogComponent, {
            data: {
              Message: 'Email ID not exist for any Security Control Room User.',
              Buttons: 1
            }
          })
        }
      },
      err => console.log(err))
  }
    /* let dialogRef =this.dialog.open(ModalDialogComponent,{
      data:{
        Message: 'Thanks.Service has been successfully inserted.',
        Buttons:1
      }
    }); */

    /* dialogRef.afterClosed()
    .subscribe(()=>{
      this.location.back();  
    }) */
  

  Cancel(){
    this.location.back();
  }
}/* 

export class ServiceManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

} */

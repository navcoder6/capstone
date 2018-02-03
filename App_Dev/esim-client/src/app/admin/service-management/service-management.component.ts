import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
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
  public departmentName:string = '';
  public emailId:string = '';
  public mobileNumber:string = '';
  public servicetype:string = '';
  public serviceList=['SOS','Non SOS','Both'];
  constructor(private location:Location,private _EsimService: EsimService,
    private dialog:MatDialog,
    fb:FormBuilder) {
    this.serviceregForm = fb.group({
      'deptName':[this.departmentName,Validators.required],
      'emailId':[this.emailId,[Validators.required,Validators.email]],
      'mobileNumber':[this.mobileNumber,Validators.required],
      'servicetype':['',Validators.required]
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
      DepartmentName: this.departmentName,
      EmailID: this.emailId,
      MobileNum: this.mobileNumber,
      CreatedOn: new Date(),
      ServiceType: this.servicetype
    };
    console.log(newService);
    this._EsimService.addNewService(newService).subscribe(
      (result: any) => {
        if (result.res === "1") {
          let dialogRef = this.dialog.open(ModalDialogComponent, {
            data: {
              Message: 'Service added successfully.',
              Buttons: 1
            }
          })
          // alert("User Successfully Registered.");
          dialogRef.afterClosed().subscribe(() => {
            this.Clear();
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
  

  Clear(){
    this.departmentName = '';
    this.emailId= '';
    this.mobileNumber ='';
    this.servicetype='';
  }
}/* 

export class ServiceManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

} */
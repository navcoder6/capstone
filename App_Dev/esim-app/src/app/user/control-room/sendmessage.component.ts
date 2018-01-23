import { Component, OnInit} from '@angular/core';
import {EsimService} from './../../shared/services//index';
import {ModalDialogComponent} from './../../shared/components/index';
import { MatDialog } from '@angular/material';
import {Location} from '@angular/common';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.css']
})
export class SendMessageComponent  {
  public EmailIdsList;
  public sendMsgForm: FormGroup;
  constructor(private _EsimService: EsimService,private dialog:MatDialog,private location:Location,fb:FormBuilder) {
    this.sendMsgForm = fb.group({
      'subject':['',Validators.required],
      'message':['',Validators.required],
    });
   } 
  

  public SendMessage(){
    //console.log(service);
    let newMsg = {
      Subject: this.sendMsgForm.controls['subject'].value,
      Message: this.sendMsgForm.controls['message'].value,
      EmailID: sessionStorage["EmailID"],
      CreatedOn: new Date()
    };
    this._EsimService.SaveMsg(newMsg).subscribe(
      (MsgInfo:any) =>  {
        if (MsgInfo.res == "1") {
          let dialogRef = this.dialog.open(ModalDialogComponent, {
            data: {
              Message: 'Message sent successfully.',
              Buttons: 1
            }
          })
        }
        else {
          this.dialog.open(ModalDialogComponent, {
            data: {
              Message: 'Error occured while sending message.',
              Buttons: 1
            }
          })
      }
    },
      err => console.log(err)
    );
    /* let dialogRef =this.dialog.open(ModalDialogComponent,{
      data:{
        Message: 'Message sent successfully.',
        Buttons:1
      }
    }); */
}
    Cancel(){
        this.location.back();
      }
}
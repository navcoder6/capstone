import { Component, OnInit} from '@angular/core';
import {EsimService} from './../../shared/services//index';
import {ModalDialogComponent} from './../../shared/components/index';
import { MatDialog } from '@angular/material';
import {Location} from '@angular/common';

@Component({
  selector: 'app-message',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.css']
})
export class SendMessageComponent  {
  public EmailIdsList;
  constructor(private _EsimService: EsimService,private dialog:MatDialog,private location:Location) { } 
  

  public SendMessage(){
    //console.log(service);
    this._EsimService.getAllEmailIdsList().subscribe(
      (EmailIdsList:any) =>  {this.EmailIdsList = EmailIdsList
        let dialogRef =this.dialog.open(ModalDialogComponent,{
          data:{
            Message: 'Message sent successfully.',
            Buttons:1
          }
        });
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
import { Component, OnInit } from '@angular/core';
import {MatDialog,MatTableDataSource} from '@angular/material';

import {ModalDialogComponent} from './../../../shared/components/index';

@Component({
  selector: 'app-log-incident',
  templateUrl: './log-incident.component.html',
  styleUrls: ['./log-incident.component.css']
})
export class LogIncidentComponent implements OnInit {

  public serviceDataSource = new MatTableDataSource([
    {
      Id:1,
      Type:'Police'
    },
    {
      Id:2,
      Type:'Fire'
    },
    {
      Id:3,
      Type:'Ambulance'
    }
  ]);

  constructor(private dialog:MatDialog) {
    
   }

  public applyFilter(filterValue:string){
    filterValue = filterValue.trim().toLowerCase();
    
    this.serviceDataSource.filter = filterValue;
  }

  ngOnInit() {
  }

  /**This is the method that gets called when SoS is sent */
  public SendSoS(service:any){
    console.log(service);
    this.dialog.open(ModalDialogComponent,{
      data:{
        Message:'SOS alert has been sent to '+ service.Type+ ' Department',
        Buttons:1
      }
    });
  }

  // /**This is the method that gets called when Non-SoS is sent */
  // public CreateSecurityIncident(service:any){
  //   console.log(service);
  // }
}

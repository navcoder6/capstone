import { Component, OnInit } from '@angular/core';
import {MatDialog,MatTableDataSource} from '@angular/material';

import {ModalDialogComponent} from './../../../shared/components/index';
import {EsimService} from './../../../shared/services/index';
import { RegistrationService } from './../../../authentication/services/index';//Added by Arun

@Component({
  selector: 'app-log-incident',
  templateUrl: './log-incident.component.html',
  styleUrls: ['./log-incident.component.css']
})
export class LogIncidentComponent implements OnInit {

  public serviceDataSource = new MatTableDataSource();
  public registrationDetail: any = {};//Added by Arun

  constructor(private dialog:MatDialog,
  private esimService:EsimService,private registrationService: RegistrationService) {
      this.esimService.getDepartments()
      .subscribe((result:any)=>{
        if(!result || result.length<1){
          this.dialog.open(ModalDialogComponent,{
            data:{
              Message:'No Department Found',
              Buttons:1
            }
          });
        }else{
          this.serviceDataSource = new MatTableDataSource(result);
        }
      },
      (error)=>{
        this.dialog.open(ModalDialogComponent,{
          data:{
            Message:'Department could not be retrieved',
            Buttons:1
          }
        });
      })
      this.registrationService.getRegistrationDetails(sessionStorage["EmailID"]).subscribe(
        (RegDetails: any) => this.registrationDetail = RegDetails,
        err => console.log(err)
      );//Added by Arun
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
    let newIncident = {
      ServiceType: "SoS",
      DepartmentName: service.Type,//TODO
      Location: this.registrationDetail.Location,
      EmailID: sessionStorage["EmailID"],
      Description : "It's an emergency. Please help."
    };
    this.esimService.createNewIncident(newIncident)
    .subscribe((result) => {
      this.dialog.open(ModalDialogComponent,{
        data:{
          Message:'SOS alert has been sent to '+ service.Type+ ' Department',
          Buttons:1
        }
      });
      }); //Added by Arun
      /* this.dialog.open(ModalDialogComponent,{
        data:{
          Message:'SOS alert has been sent to '+ service.Type+ ' Department',
          Buttons:1
        }
      }); */ //Commented by Arun
  }

  // /**This is the method that gets called when Non-SoS is sent */
  // public CreateSecurityIncident(service:any){
  //   console.log(service);
  // }
}

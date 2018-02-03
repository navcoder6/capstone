import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';//Added by Arun On 29Jan2018
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { scaleInOutAnimation } from './../../../animations/index';
import { ModalDialogComponent } from './../../../shared/components/index';
import { RegistrationService } from './../../../authentication/services/index';
import { EsimService } from './../../../shared/services/index';

@Component({
  selector: 'app-update-incident',
  templateUrl: './update-incident.component.html',
  styleUrls: ['./update-incident.component.css'],
  animations: [scaleInOutAnimation],
  host: { '[@scaleInOutAnimation]': '' }
})
export class UpdateIncidentComponent implements OnInit {
  public incidentForm: FormGroup;
  public registrationDetail: any = {};
  public IncidentDetails: any = {};
  public status:string ='';
 public statusList=['New','InProgress','Resolved','Reject'];
  constructor(private registrationService: RegistrationService,
    private esimService: EsimService,
    private location: Location,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    fb: FormBuilder) { 
      this.incidentForm = fb.group({
        'firstName': [''],
        'lastName': [''],
        'emailId': [''],
        'mobileNumber': [''],
        'department':[''],
        'issueDescription' : [''],
        'status':['',Validators.required],
        'remarks':['',Validators.required]
      });
      //this.registrationDetail.FirstName='Arun';//Added temporarily
      this.incidentForm.controls['firstName'].disable();
      this.incidentForm.controls['lastName'].disable();
      this.incidentForm.controls['emailId'].disable();
      this.incidentForm.controls['mobileNumber'].disable();
      this.incidentForm.controls['department'].disable();
      this.incidentForm.controls['issueDescription'].disable();
  
       this.registrationService.getRegistrationDetails(sessionStorage["EmailID"]).subscribe(
        (RegDetails: any) => this.registrationDetail = RegDetails,
        err => console.log(err)
      );
    } 

  ngOnInit() {
    this.route.params.subscribe(params =>{
      sessionStorage["IncidentId"] = params['serviceId'];
      this.esimService.getIncidentbyID(sessionStorage["IncidentId"]).subscribe(
        (IncidentDetail: any) => this.IncidentDetails = IncidentDetail,
        err => console.log(err)
      );
     } )
  }

  UpdateIncident(){
    let UpdatedIncident = {
      IncidentID: sessionStorage["IncidentId"],
      Status: this.incidentForm.controls['status'].value,
      Remarks: this.incidentForm.controls['remarks'].value,
      ModifiedOn: new Date(),
    };

    this.esimService.UpdateIncident(UpdatedIncident).subscribe(
      (result: any) => {
        if (result.res === "1") {
          let dialogRef = this.dialog.open(ModalDialogComponent, {
            data: {
              Message: 'Incident Updated successfully.',
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
              Message: 'Error occured while updating incident.',
              Buttons: 1
            }
          })
        }
      },
      err => console.log(err))
  }

  Cancel() {
    this.location.back();
  }

}

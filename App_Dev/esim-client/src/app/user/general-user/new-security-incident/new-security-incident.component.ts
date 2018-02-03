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
  selector: 'app-new-security-incident',
  templateUrl: './new-security-incident.component.html',
  styleUrls: ['./new-security-incident.component.css'],
  animations: [scaleInOutAnimation],
  host: { '[@scaleInOutAnimation]': '' }
})
export class NewSecurityIncidentComponent implements OnInit {
  public registrationForm: FormGroup;
  public registrationDetail: any = {};
  public issueDescription:string ='';
  constructor(private registrationService: RegistrationService,
    private esimService: EsimService,
    private location: Location,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    fb: FormBuilder) {
    this.registrationForm = fb.group({
      'firstName': ['', Validators.required],
      'lastName': [''],
      'emailId': [{ disabled: true }, [Validators.required, Validators.email]],
      'mobileNumber': ['', Validators.required],
      'issueDescription' : ['', Validators.required],
    });

    this.registrationService.getRegistrationDetails(sessionStorage["EmailID"]).subscribe(
      (RegDetails: any) => this.registrationDetail = RegDetails,
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      sessionStorage["DepartmentName"] = params['serviceId'];
     } )
  }

  /**This is the method that gets called when SoS is sent */
  public SendSoS() {
    //console.log(service);
    let newIncident = {
      ServiceType: "NonSoS",
      DepartmentName: sessionStorage["DepartmentName"],//TODO
      Location: this.registrationDetail.Location,
      EmailID: this.registrationDetail.EmailID,
      Description : this.issueDescription
    };
    this.esimService.createNewIncident(newIncident)
      .subscribe((result) => {
        let dialogRef = this.dialog.open(ModalDialogComponent, {
          data: {
            Message: 'Thanks.Your incident is reported successfully',
            Buttons: 1
          }
        });
        dialogRef.afterClosed()
          .subscribe(() => {
            this.location.back();
          })
      }, error => console.error(error))
  }

  Cancel() {
    this.location.back();
  }
}

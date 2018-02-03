import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { AppCommunicationService,SessionService } from './../shared/services/index';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public mobileQuery: MediaQueryList;
  public navigationList: Routing[] =
    [
      {
        Display: 'Incident Logging',
        Path: 'logIncident'
      },
      {
        Display: 'View Registration Details',
        Path: 'registrationDetails'
      },
      {
        Display: 'View Logged Incidents',
        Path: 'incidents'
      },
      {
        Display: 'View Alert Message',
        Path: 'viewalertmsg'
      }//Added by Arun Temp
    ];
  public isMenuOpen: boolean = true;
  private _mobileQueryListener: () => void;

  constructor(cd: ChangeDetectorRef,
    media: MediaMatcher,
    private appComService: AppCommunicationService,
    private sessionService:SessionService) {
    this.checkAndAddControlUserSetting();
    this.appComService.menuToggledEvent
      .subscribe((isMenuOpen) => {
        this.isMenuOpen = isMenuOpen;
      });

    this.mobileQuery = media.matchMedia('(max-width:600px)');

    this._mobileQueryListener = () => cd.detectChanges();

    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  private checkAndAddControlUserSetting() {
    if (this.sessionService.isControlUser()) {
      this.navigationList.push(
        {
          Display: 'Pending Incidents List',
          Path: 'pendingincidents'
        },//Added by Arun Temp
        {
          Display: 'Send Message',
          Path: 'sendmessage'
        }//Added by Arun Temp
      );
    }
  }
}


interface Routing {
  Display: string,
  Path: string
}
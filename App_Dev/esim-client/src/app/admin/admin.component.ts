import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { AppCommunicationService } from './../shared/services/index';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public mobileQuery:MediaQueryList;
  public navigationList: Routing[] =
    [
      {
        Display: 'Add Service',
        Path: 'addservice'
      }//Added by Arun Temp
    ];
  public isMenuOpen: boolean = true;
  private _mobileQueryListener: () => void;

  constructor(cd:ChangeDetectorRef,
    media:MediaMatcher,
     private appComService: AppCommunicationService) {
    this.appComService.menuToggledEvent
    .subscribe((isMenuOpen) => {
      this.isMenuOpen = isMenuOpen;
    });
  
    this.mobileQuery = media.matchMedia('(max-width:600px)');

    this._mobileQueryListener = ()=>cd.detectChanges();

    this.mobileQuery.addListener(this._mobileQueryListener);
   }

  ngOnInit() {
  }

}

interface Routing {
  Display: string,
  Path: string
}
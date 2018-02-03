import { Component, OnInit } from '@angular/core';

import { AppCommunicationService,SessionService } from './../../shared/services/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public Header: string;
  public isMenuOpen: boolean = true;
  constructor(private appComService: AppCommunicationService,
  private sessionService:SessionService) {
    this.Header = 'ESIM';
  }

  ngOnInit() {
  }

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.appComService.toggleMenu(this.isMenuOpen);
  }

  SignOut(){
    sessionStorage.removeItem("EmailID");
    sessionStorage.removeItem("UserID");
    this.sessionService.end();
  }
}
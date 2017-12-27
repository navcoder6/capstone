import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public Header: string;
  constructor() {
    this.Header = 'Welcome to Emergency And Security Incident Management Application';
   }

  ngOnInit() {
  }

}

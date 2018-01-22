import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './../animations/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideInAnimation],
  host: { '[@slideInAnimation]': '' }
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}

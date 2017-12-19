import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }
  mode: number;
  public Admin: boolean = true;

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.mode = +params['mode'];
      if(this.mode==1)
      {
        this.Admin=false;
      }
  });
  }

}

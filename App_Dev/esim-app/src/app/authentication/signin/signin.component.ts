import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { SignInService } from "./signin.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  EmailID:string;///
  Password:string;///

  constructor(private _SignInService: SignInService,private route: ActivatedRoute, private router: Router) { }///
  //constructor( private route: ActivatedRoute) { }
  mode: number;
  public Admin: boolean = true;
  result:any[];

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.mode = +params['mode'];
      if(this.mode==1)
      {
        this.Admin=false;
      }
  });
  }

  onSubmit(formValue: any):void{
    console.log("Form Value = " + JSON.stringify(formValue, null, 4));
    let Credential = {
          LoginID:  formValue.email,
          Password: formValue.password,
        };
    console.log(Credential);
    this._SignInService.CheckCredential(Credential).subscribe(
      (result:any) =>  {if(result.res=="1"){
      alert("Valid Login")
      this.router.navigate(['/'])}
    else if(result.res=="2"){
      alert("Invalid Password")
      return}
    else{
        alert("Invalid Login ID")
        return}},
      err => console.log(err)
    )
  }///
}

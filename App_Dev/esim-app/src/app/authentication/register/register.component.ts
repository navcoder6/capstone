import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';///
import { RegisterService } from "./register.service";///

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  FirstName:string;
  LastName:string;
  EmailID:string;
  Password:string;
  Location:string;
  MobileNum:string;
  CreatedOn:Date;

  constructor(private _RegisterService: RegisterService,private route: ActivatedRoute, private router: Router) { }
  mode: number;
  public view: boolean = false;
  RegDetails: any={};
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.mode = +params['mode'];
      if(this.mode==1)
      {
        this.view=true;
        this._RegisterService.getregistrationDetails(sessionStorage["EmailID"]).subscribe(
          (RegDetails:any) =>  this.RegDetails=RegDetails ,
          err => console.log(err)
        );
      }
  });
  }
  onSubmit(formValue: any):void{
    console.log("Form Value = " + JSON.stringify(formValue, null, 4));
    let newProfile = {
          FirstName: formValue.FirstName,
          LastName: formValue.LastName,
          EmailID:  formValue.EmailID,
          Password: formValue.Password,
          Location: formValue.Location,
          MobileNum: formValue.Mobile,
          CreatedOn: new Date()
        };
    console.log(newProfile);
    this._RegisterService.addUserProfile(newProfile).subscribe(
      (result:any) =>  {if(result.res=="1"){
        alert("User Successfully Registered.");
        this.router.navigate(['/'])}
    else{
        alert("Email ID already exist for some other user.")
        return}},
      err => console.log(err)
    )
    
  }
}


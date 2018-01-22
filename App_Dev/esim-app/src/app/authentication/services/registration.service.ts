import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegistrationService {
  private _profileUrl = "http://localhost:3000/register";  
  constructor(private _http: HttpClient) { }

  addUserProfile(newProfile: any) {
    return this._http.post(this._profileUrl,newProfile);
  }
  
  getregistrationDetails(EmailID: any){
    return this._http.get(this._profileUrl+'/'+EmailID);
  }

}

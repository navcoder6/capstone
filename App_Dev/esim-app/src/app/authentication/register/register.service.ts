import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {
  private _profileUrl = "http://localhost:3000/register";  
  profile:any[];
  constructor (private _http: HttpClient) { }

  addUserProfile(newProfile: any) {
    return this._http.post(this._profileUrl,newProfile);
  }
}

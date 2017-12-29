import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignInService {
  private _CredentialUrl = "http://localhost:3000/signin"; 
  req:any;
  constructor (private _http: HttpClient) { }

  CheckCredential(Credential: any) {
    return this._http.put(this._CredentialUrl,Credential);
  }
}
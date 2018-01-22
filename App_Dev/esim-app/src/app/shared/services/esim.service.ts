import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EsimService {
  private _CredentialUrl = "http://localhost:3000/signin";
  private _IncidentUrl = "http://localhost:3000/Incident"; //Added by Arun
  private _AddServiceUrl = "http://localhost:3000/NewService"; //Added by Arun
  private _EmailIDsListUrl = "http://localhost:3000/EmailIdsList"; //Added by Arun
  constructor(private _http: HttpClient) { }

  public SignIn(Credential: any) {
    return this._http.put(this._CredentialUrl,Credential);
  }

  public SignOut() {

  }

  public SendSoS() {

  }

  public SendNonSoS() {

  }

  public Registration() {

  }

  getLoggedIncidentList(EmailID: any){
    return this._http.get(this._IncidentUrl+'/'+EmailID);
  } //Added by Arun

  addNewService(newService: any) {
    return this._http.post(this._AddServiceUrl,newService);
  }//Added by Arun
  getAllEmailIdsList(){
    return this._http.get(this._EmailIDsListUrl);
  } //Added by Arun
}

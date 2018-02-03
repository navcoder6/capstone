import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EsimService {
  private esimUrl = "http://localhost:3000/";
  private userRoute = "http://localhost:3000/user"; //Added by Arun
  private adminRoute = "http://localhost:3000/admin"; //Added by Arun
  private _EmailIDsListUrl = "http://localhost:3000/EmailIdsList"; //Added by Arun\
  constructor(private _http: HttpClient) { }

  public SignIn(Credential: any) {
    return this._http.post(this.esimUrl + 'auth/login', Credential);
  }

  public SignInAsAdmin(Credential: any) {
    return this._http.post(this.esimUrl + 'admin/login', Credential);
  }

  public SignOut() {

  }

  public SendSoS() {

  }

  public SendNonSoS() {

  }

  public Registration() {

  }

  public SaveMsg(newMsg: any){
    return this._http.post(this.userRoute+'/alerts',newMsg);
  } //Added by Arun

  public getDepartments(){
    return this._http.get(this.userRoute + '/departments');
  }

  createNewIncident(incident: any) {
    return this._http.post(this.userRoute + '/incidents',incident);
  }

  getLoggedIncidentList(EmailID: any) {
    return this._http.get(this.userRoute + '/incidents'+'/'+EmailID); //Change by Arun replace with JWT
  } //Added by Arun
  
  getPendingIncidentList(EmailID: any) {
    return this._http.get(this.userRoute + '/pendingincidents'+'/'+EmailID); //Change by Arun replace with JWT
  } 

  getIncidentbyID(IncidentID: any) {
    return this._http.get(this.userRoute + '/singleincident'+'/'+IncidentID); //Added by Arun On 29Jan2018
  }

  UpdateIncident(UpdatedIncident:any){
    return this._http.put(this.userRoute+'/UpdateIncident', UpdatedIncident)
  }
  addNewService(newService: any) {
    return this._http.post(this.adminRoute+'/addService', newService);
  }//Added by Arun

  getAllEmailIdsList() {
    return this._http.get(this._EmailIDsListUrl);
  }  //Added by Arun

  getMessageList(){
    return this._http.get(this.userRoute + '/alerts');
  } //Added by Arun
}

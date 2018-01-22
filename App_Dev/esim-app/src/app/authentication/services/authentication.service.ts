import { Injectable } from '@angular/core';

import {EsimService} from './../../shared/services/index';

@Injectable()
export class AuthenticationService {

  constructor(private esimService: EsimService) {

   }

  public SignIn(loginDetails:any) {
    return this.esimService.SignIn(loginDetails);
  }

  public SignOut() {

  }
}

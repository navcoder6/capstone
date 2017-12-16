import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {EsimService, EmergencyNotificationService} from './services/index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [EsimService, EmergencyNotificationService]
})
export class SharedModule {
 }

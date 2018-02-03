import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule,MatToolbarModule,
MatSidenavModule,MatListModule,MatSelectModule,MatTableModule,MatDialogModule,MatPaginatorModule,MatCheckboxModule} from '@angular/material';

import {EsimService, EmergencyNotificationService,AppCommunicationService,
SessionService} from './services/index';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule, //Added by Arun
    MatCheckboxModule //Added by Arun On 26Jan2018
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,//Added by Arun
    MatCheckboxModule //Added by Arun On 26Jan2018
  ],
  entryComponents: [ModalDialogComponent],
  declarations: [ModalDialogComponent],
  providers: [SessionService, EsimService, EmergencyNotificationService,AppCommunicationService]
})
export class SharedModule {
 }

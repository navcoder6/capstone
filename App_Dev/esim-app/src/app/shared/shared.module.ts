import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule,MatToolbarModule,
MatSidenavModule,MatListModule,MatSelectModule,MatTableModule,MatDialogModule,MatPaginatorModule} from '@angular/material';

import {EsimService, EmergencyNotificationService,AppCommunicationService} from './services/index';
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
    MatPaginatorModule //Added by Arun
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
    MatPaginatorModule//Added by Arun
  ],
  entryComponents: [ModalDialogComponent],
  declarations: [ModalDialogComponent],
  providers: [EsimService, EmergencyNotificationService,AppCommunicationService]
})
export class SharedModule {
 }

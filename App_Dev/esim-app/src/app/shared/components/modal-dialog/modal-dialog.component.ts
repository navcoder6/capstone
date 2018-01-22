import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent {

  constructor(
    private diaologRef:MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

    CloseDialog(){
      this.diaologRef.close();
    }
}

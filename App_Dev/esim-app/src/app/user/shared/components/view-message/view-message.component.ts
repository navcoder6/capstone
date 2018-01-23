import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator,MatTableDataSource} from '@angular/material';
import {EsimService} from './../../../../shared/services//index';

@Component({
  selector: 'app-msg',
  templateUrl: './view-message.component.html',
  styleUrls: ['./view-message.component.css']
})
export class ViewMessageComponent implements OnInit {
  public MessageDataSource;//Added by Arun
  constructor(private _EsimService: EsimService) { } //Added by Arun
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this._EsimService.getMessageList().subscribe(
      (MessageList:any) =>  {this.MessageDataSource = new MatTableDataSource(MessageList) 
        this.MessageDataSource.paginator = this.paginator;},
      err => console.log(err)
    );//Added by Arun
  }
  
 /*  @ViewChild(MatPaginator) paginator: MatPaginator;
  
    ngAfterViewInit() {
      this.IncidentDataSource.paginator = this.paginator;
    } */
  //constructor(){} commented by Arun
  
  public applyFilter(filterValue:string){
    filterValue = filterValue.trim().toLowerCase();
    
    this.MessageDataSource.filter = filterValue;
  }
}

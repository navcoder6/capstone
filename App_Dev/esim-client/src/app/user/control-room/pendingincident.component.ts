import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator,MatTableDataSource} from '@angular/material';
import {EsimService} from './../../shared/services//index';

@Component({
  selector: 'app-incidents',
  templateUrl: './pendingincident.component.html',
  styleUrls: ['./pendingincident.component.css']
})
export class PendingIncidentComponent implements OnInit {
  public IncidentDataSource;//Added by Arun
  constructor(private _EsimService: EsimService) { } //Added by Arun
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this._EsimService.getPendingIncidentList(sessionStorage["EmailID"]).subscribe(
      (incidentList:any) =>  {this.IncidentDataSource = new MatTableDataSource(incidentList) 
        this.IncidentDataSource.paginator = this.paginator;},
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
    
    this.IncidentDataSource.filter = filterValue;
  }
}
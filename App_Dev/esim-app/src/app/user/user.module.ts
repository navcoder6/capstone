import { NgModule } from '@angular/core';
/* import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';//Added by Arun */
import { routing }  from '../app.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserHomeComponent } from './end-user/home.component';
//import { ViewLoggedIncidentComponent } from './end-user/viewloggedincident.component';
//import './polyfills';
//import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';//Added by Arun
//import {BrowserModule} from '@angular/platform-browser';//Added by Arun
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';//Added by Arun
//import {NgModule} from '@angular/core';
//import {FormsModule, ReactiveFormsModule} from '@angular/forms';//Added by Arun

//import {TableFilteringExample} from './app/table-filtering-example';
//import {HttpModule} from '@angular/http';//Added by Arun
//import {CdkTableModule} from '@angular/cdk/table';//Added by Arun


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [UserHomeComponent]
})
export class UserModule { } //Commented by Arun



/* @NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
}) //Added by Arun
export class DemoMaterialModule {}  *///Added by Arun
/* 
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CommonModule,
    routing
  ],
  //entryComponents: [TableFilteringExample],
  declarations: [UserHomeComponent,ViewLoggedIncidentComponent]
  //bootstrap: [TableFilteringExample],
  //providers: []
}) */ //Added by Arun
//export class AppModule {}
//export class UserModule { }

//platformBrowserDynamic().bootstrapModule(UserModule); //Added by Arun





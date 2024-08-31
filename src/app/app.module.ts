import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { bootstrapApplication } from '@angular/platform-browser';

@NgModule({
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    HousingLocationComponent,
  ],
  providers: [],
  bootstrap: [], //bootstrap: [AppComponent],
  declarations: [
    
  ]
})
export class AppModule { }

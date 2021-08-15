import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModafinilComponent } from './modafinil/modafinil.component';
import { ModafinilListComponent } from './modafinil/modafinil-list/modafinil-list.component';
import { ModafinilDetailsComponent } from './modafinil/modafinil-details/modafinil-details.component';
import { MaterialModule } from '@modafinil/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from '@modafinil/core-data';
import { CoreStateModule } from '@modafinil/core-state';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, ModafinilComponent, ModafinilListComponent, ModafinilDetailsComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RoutingModule, 
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

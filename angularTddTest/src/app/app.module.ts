import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { CommonModule } from '@angular/common';
import {ProglanguageService} from './services/proglanguage.service';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    NgxPaginationModule
  ],
  providers: [ProglanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

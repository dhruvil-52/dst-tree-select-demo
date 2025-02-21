import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DstTreeSelectModule } from 'dst-tree-select';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DstTreeSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DisplayDetailComponent } from './display-detail/display-detail.component';
import { ButtonLogComponent } from './button-log/button-log.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDetailComponent,
    ButtonLogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

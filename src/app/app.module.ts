import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScrollwheelComponent } from './scrollwheel/scrollwheel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollwheelComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

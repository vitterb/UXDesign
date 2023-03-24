import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScrollwheelComponent } from './scrollwheel/scrollwheel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StopslistComponent } from './stopslist/stopslist.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollwheelComponent,
    StopslistComponent
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

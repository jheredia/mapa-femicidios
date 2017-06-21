import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FemicideDetailsComponent } from './femicides/femicide-details/femicide-details.component';
import { FemicideListComponent } from './femicides/femicide-list/femicide-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FemicideDetailsComponent,
    FemicideListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

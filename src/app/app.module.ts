import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

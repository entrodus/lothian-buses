import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SettingsContext } from './settings.context';
import { RestService } from './rest/rest.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    SettingsContext,
    RestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

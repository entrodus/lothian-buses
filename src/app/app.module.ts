import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SettingsContext } from './settings.context';
import { RestService } from './rest/rest.service';
import { RestServiceMock } from './rest/rest.service.mock';

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
    { provide: RestService, useClass: RestServiceMock },
    // RestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';

// import { AppConfig } from './core/config/app-config';
import { MasterLayoutModule } from './modules/master-layout/master-layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, //note:must be called last in optopnal cases
    MasterLayoutModule
  ],
  providers: [
    // AppConfig,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

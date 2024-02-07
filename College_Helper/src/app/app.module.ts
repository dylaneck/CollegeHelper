import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiCallService } from './Services/api-call.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { IncrementCardComponent } from './Components/increment-card/increment-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, IncrementCardComponent],
  imports: [BrowserModule, AppRoutingModule, MatCardModule],
  providers: [ApiCallService, provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}

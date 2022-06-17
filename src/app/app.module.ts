import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ThreeModule } from 'src/component/three.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ThreeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

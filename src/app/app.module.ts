import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryHomeComponent } from './modules/cry-home/cry-home.component';
import { NavigatorComponent } from './shared/components/navigator/navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    CryHomeComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

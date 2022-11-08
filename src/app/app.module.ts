import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHelloWorldComponent } from './app-hello-world/app-hello-world.component';
import { AppUserItemComponent } from './app-user-item/app-user-item.component';
import { AppUserLsitComponent } from './app-user-lsit/app-user-lsit.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHelloWorldComponent,
    AppUserItemComponent,
    AppUserLsitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

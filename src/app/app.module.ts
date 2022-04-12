import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './nav/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    NavComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CartComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

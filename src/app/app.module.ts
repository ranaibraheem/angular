import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ServersComponent } from './servers/servers.component';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ServersComponent,
    ProductsComponent,
    ],

  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }

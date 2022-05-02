import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ServersComponent } from './servers/servers.component';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { MachinesComponent } from './machines/machines.component';
import { BeansComponent } from './beans/beans.component';
import { CupsComponent } from './cups/cups.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'machines', component: MachinesComponent },
  { path: 'beans', component: BeansComponent },
  { path: 'cups', component: CupsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
]
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
    DetailComponent,
    HomeComponent,
    MachinesComponent,
    BeansComponent,
    CupsComponent,
    CheckoutComponent,
    LoginComponent,
    ],

  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }

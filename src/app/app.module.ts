import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field/form-field-control';
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { LocalService } from './local.service';


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
import { MachinesComponent } from './machines/machines.component';
import { BeansComponent } from './beans/beans.component';
import { CupsComponent } from './cups/cups.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'machines', component: MachinesComponent },
  { path: 'beans', component: BeansComponent },
  { path: 'cups', component: CupsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent},
  { path: 'nav', component: NavComponent }
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
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
  ],

  providers: [LocalService],
  bootstrap: [AppComponent],
})

export class AppModule { }

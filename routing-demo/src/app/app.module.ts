import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/Table';
import { FormsModule } from '@angular/forms';
import { SignComponent } from './sign/sign.component';
import { ListComponent } from './order/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    ProductsComponent,
    OrderDetailsComponent,
    SignComponent,
    ListComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

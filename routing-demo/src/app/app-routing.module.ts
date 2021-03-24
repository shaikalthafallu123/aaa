import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SignComponent } from './sign/sign.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'sign', component: SignComponent },
  { path: 'order', component: OrderComponent },
  {
    path: 'products', component: ProductsComponent,
    children: [{ path: 'orderDetails', component: OrderDetailsComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, OrderComponent, ProductsComponent, OrderDetailsComponent]
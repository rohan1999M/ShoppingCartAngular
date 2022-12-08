import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentModuleRoutingModule } from './component-module-routing.module';
import { HomePageComponent } from '../home-page/home-page.component';
// import { NavBarComponent } from 'src/app/nav-bar/nav-bar.component';
import { ViewDetailsComponent } from '../view-details/view-details.component';
import { CartComponent } from '../cart/cart.component';
import { PlaceOrderComponent } from '../place-order/place-order.component';
// import { FooterComponent } from 'src/app/footer/footer.component';




// import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
// import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    HomePageComponent,
  //  NavBarComponent,
   ViewDetailsComponent,
   CartComponent,
   PlaceOrderComponent
    // FooterComponent,
  
 
 
    // AdminDashboardComponent,
  ],
  imports: [
    CommonModule,
    ComponentModuleRoutingModule,
    // HttpClientModule
  ]
  })

export class ComponentModuleModule { }

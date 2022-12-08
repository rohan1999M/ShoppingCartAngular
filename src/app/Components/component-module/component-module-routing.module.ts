import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { platform } from 'os';
import { CartComponent } from '../cart/cart.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { PlaceOrderComponent } from '../place-order/place-order.component';
import { ViewDetailsComponent } from '../view-details/view-details.component';


const routes: Routes = [
  {path:'home', component:HomePageComponent},
  {path:'viewDetails/:id',component:ViewDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'placeOrders', component: PlaceOrderComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentModuleRoutingModule { }

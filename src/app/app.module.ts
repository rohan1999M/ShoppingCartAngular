import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { ManageCategoryComponent } from './Admin/manage-category/manage-category.component';
// import { PlaceOrderComponent } from './Components/place-order/place-order.component';









@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        AdminDashboardComponent,
        NavBarComponent,
        FooterComponent,
        SignUPComponent,
        AddCategoryComponent,
        ManageCategoryComponent,
        // PlaceOrderComponent,
       
      
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
  
    ]
})
export class AppModule { }

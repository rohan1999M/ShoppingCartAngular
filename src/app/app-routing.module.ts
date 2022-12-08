import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { ManageCategoryComponent } from './Admin/manage-category/manage-category.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginPageComponent},
  {path: 'AdminDashboard', component:AdminDashboardComponent},
  {path:'addCategory',component:AddCategoryComponent},
  {path:'manageCategory', component:ManageCategoryComponent},
  {path:'USER', loadChildren:()=>import('./Components/component-module/component-module.module')
  .then(mod=> mod.ComponentModuleModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

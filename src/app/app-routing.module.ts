import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { SelectorComponent1Component } from './selector-component1/selector-component1.component';
import { SelectorComponent2Component } from './selector-component2/selector-component2.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'selector1',
    component:SelectorComponent1Component
  },
  {
    path:'selector2',
    component:SelectorComponent2Component
  },
  {
    path:'profile',
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

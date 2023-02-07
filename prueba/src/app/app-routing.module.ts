import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'categories' , component: CategoriesComponent},
  {path: 'cart' , component: CartComponent},
  {
    path: 'profile' ,
    component: ProfileComponent,
    children: [
      { path: ':category', component: ProductsComponent }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

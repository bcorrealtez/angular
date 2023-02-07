import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'categories' , component: CategoriesComponent},
  {path: '' , component: HomeComponent},
  {path: '' , component: HomeComponent},
  {path: '' , component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

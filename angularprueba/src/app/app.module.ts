import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductsComponent } from './components/products/products.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomecardComponent } from './components/homecard/homecard.component';
import { CatitemComponent } from './components/catitem/catitem.component';
import { ControllersComponent } from './components/controllers/controllers.component';
import { ProductitemComponent } from './components/productitem/productitem.component';
import { PoductimagesComponent } from './components/poductimages/poductimages.component';
import { PoductspecsComponent } from './components/poductspecs/poductspecs.component';
import { PoductcommentsComponent } from './components/poductcomments/poductcomments.component';
import { RelprodComponent } from './components/relprod/relprod.component';
import { CartlistComponent } from './components/cartlist/cartlist.component';
import { CategorieslistComponent } from './components/categorieslist/categorieslist.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { BuyresumeComponent } from './components/buyresume/buyresume.component';
import { BuyerinfoComponent } from './components/buyerinfo/buyerinfo.component';
import { PaymethodComponent } from './components/paymethod/paymethod.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    CategoriesComponent,
    ProductInfoComponent,
    ProductsComponent,
    MyProfileComponent,
    CartComponent,
    HomeComponent,
    NavbarComponent,
    HomecardComponent,
    CatitemComponent,
    ControllersComponent,
    ProductitemComponent,
    PoductimagesComponent,
    PoductspecsComponent,
    PoductcommentsComponent,
    RelprodComponent,
    CartlistComponent,
    CategorieslistComponent,
    ProductlistComponent,
    BuyresumeComponent,
    BuyerinfoComponent,
    PaymethodComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

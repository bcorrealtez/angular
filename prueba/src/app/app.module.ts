import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomecardComponent } from './components/homecard/homecard.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CatitemComponent } from './components/catitem/catitem.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductitemComponent } from './components/productitem/productitem.component';
import { ProductinfoComponent } from './components/productinfo/productinfo.component';
import { ProductimagesComponent } from './components/productimages/productimages.component';
import { ProductspecsComponent } from './components/productspecs/productspecs.component';
import { CommentsectionComponent } from './components/commentsection/commentsection.component';
import { CommentComponent } from './components/comment/comment.component';
import { RelprodComponent } from './components/relprod/relprod.component';
import { CartComponent } from './components/cart/cart.component';
import { CartitemComponent } from './components/cartitem/cartitem.component';
import { CartlistComponent } from './components/cartlist/cartlist.component';
import { BuyresumeComponent } from './components/buyresume/buyresume.component';
import { PaymethodComponent } from './components/paymethod/paymethod.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    HomecardComponent,
    HeaderComponent,
    CategoriesComponent,
    CatitemComponent,
    FilterComponent,
    ProductsComponent,
    ProductitemComponent,
    ProductinfoComponent,
    ProductimagesComponent,
    ProductspecsComponent,
    CommentsectionComponent,
    CommentComponent,
    RelprodComponent,
    CartComponent,
    CartitemComponent,
    CartlistComponent,
    BuyresumeComponent,
    PaymethodComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

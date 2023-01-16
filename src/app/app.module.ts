import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { SuportComponent } from './suport/suport.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CategoriesComponent } from './main/categories/categories.component';
import { RecommendedComponent } from './main/recommended/recommended.component';
import { ArrowComponent } from './main/arrow/arrow.component';
import { PromotionsComponent } from './catalog/promotions/promotions.component';
import { CatalogModule } from './catalog/catalog.module';
import { CatalogRoutingModule } from './catalog/catalog.routing';
import { DayRoutingModule } from './catalog/day-by-day/day.routing';
import { HealthyRoutingModule } from './catalog/healthy-and-beauty/healthy.routing';
import { PromotionsRoutingModule } from './catalog/promotions/promotions.routing';
import { TechRoutingModule } from './catalog/technology/technology.routing';
import { EditionComponent } from './main/edition/edition.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    SuportComponent,
    FavoritesComponent,
    CategoriesComponent,
    RecommendedComponent,
    ArrowComponent,
    EditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
exports: [
  CatalogRoutingModule,
  DayRoutingModule,
  HealthyRoutingModule,
  PromotionsRoutingModule,
  TechRoutingModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

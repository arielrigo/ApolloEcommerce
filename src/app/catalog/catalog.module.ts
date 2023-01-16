import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TechnologyComponent } from './technology/technology.component';
import { HealthyAndBeautyComponent } from './healthy-and-beauty/healthy-and-beauty.component';
import { BrowserModule } from '@angular/platform-browser';
import { DayByDayComponent } from './day-by-day/day-by-day.component';
import { CatalogComponent } from './catalog.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { CatalogRoutes, CatalogRoutingModule } from './catalog.routing';
import { DayRoutingModule } from './day-by-day/day.routing';
import { HealthyRoutingModule } from './healthy-and-beauty/healthy.routing';
import { PromotionsRoutingModule } from './promotions/promotions.routing';
import { TechRoutingModule } from './technology/technology.routing';



@NgModule({
  declarations: [
    CatalogComponent,
    TechnologyComponent,
    HealthyAndBeautyComponent,
    DayByDayComponent,
    PromotionsComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    DayRoutingModule,
    HealthyRoutingModule,
    PromotionsRoutingModule,
    TechRoutingModule
    // RouterModule.forChild(CatalogRoutes)
    
  ],
  providers: [],
  exports:[
    PromotionsComponent
  ]
})
export class CatalogModule { }

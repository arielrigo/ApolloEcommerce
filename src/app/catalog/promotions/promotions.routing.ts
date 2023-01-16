import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PromotionsComponent } from "./promotions.component";

export const PromotionsRoutes : Routes = [
        {
            path: 'promotions', 
            component: PromotionsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(PromotionsRoutes)],
    exports: [RouterModule]
  })
  export class PromotionsRoutingModule { }
import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HealthyAndBeautyComponent } from "./healthy-and-beauty.component";

export const HealthyRoutes : Routes = [
        {
            path: 'healthyAndBeauty', 
            component: HealthyAndBeautyComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(HealthyRoutes)],
    exports: [RouterModule]
  })
  export class HealthyRoutingModule { }

import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TechnologyComponent } from "./technology.component";

export const TechRoutes : Routes = [
        {
            path: 'technology', 
            component: TechnologyComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(TechRoutes)],
    exports: [RouterModule]
  })
  export class TechRoutingModule { }
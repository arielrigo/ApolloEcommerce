import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DayByDayComponent } from "./day-by-day.component";

export const DayRoutes : Routes = [
        {
            path: 'dayByDay', 
            component: DayByDayComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(DayRoutes)],
    exports: [RouterModule]
  })
  export class DayRoutingModule { }

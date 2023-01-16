import { Routes } from "@angular/router";
import { CatalogComponent } from "./catalog.component";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const CatalogRoutes : Routes = [
        {
            path: 'catalog', 
            component: CatalogComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(CatalogRoutes)],
    exports: [RouterModule]
  })
  export class CatalogRoutingModule { }

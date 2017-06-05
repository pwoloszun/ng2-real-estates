import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NavComponent } from "./nav/nav.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavComponent,
    NotFoundComponent,
  ],
  declarations: [
    NavComponent,
    NotFoundComponent,
  ]
})
export class LayoutModule {
}

export {
  NotFoundComponent,
}

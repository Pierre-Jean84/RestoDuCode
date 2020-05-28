import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaPagePage } from './pizza-page.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaPagePageRoutingModule {}

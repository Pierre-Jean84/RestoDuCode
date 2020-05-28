import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzasAdministrationPage } from './pizzas-administration.page';

const routes: Routes = [
  {
    path: '',
    component: PizzasAdministrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzasAdministrationPageRoutingModule {}

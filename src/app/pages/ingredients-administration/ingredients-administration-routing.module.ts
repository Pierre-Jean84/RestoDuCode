import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientsAdministrationPage } from './ingredients-administration.page';

const routes: Routes = [
  {
    path: '',
    component: IngredientsAdministrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientsAdministrationPageRoutingModule {}

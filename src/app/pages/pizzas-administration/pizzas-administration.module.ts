import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzasAdministrationPageRoutingModule } from './pizzas-administration-routing.module';

import { PizzasAdministrationPage } from './pizzas-administration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzasAdministrationPageRoutingModule
  ],
  declarations: [PizzasAdministrationPage]
})
export class PizzasAdministrationPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaPagePageRoutingModule } from './pizza-page-routing.module';

import { PizzaPagePage } from './pizza-page.page';
import { CartModule } from 'src/app/components/cart/cart.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaPagePageRoutingModule,
    CartModule
  ],
  declarations: [PizzaPagePage]
})
export class PizzaPagePageModule { }

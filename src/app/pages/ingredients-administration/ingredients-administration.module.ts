import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientsAdministrationPageRoutingModule } from './ingredients-administration-routing.module';

import { IngredientsAdministrationPage } from './ingredients-administration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngredientsAdministrationPageRoutingModule
  ],
  declarations: [IngredientsAdministrationPage]
})
export class IngredientsAdministrationPageModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pizza-page',
    loadChildren: () => import('./pages/pizza-page/pizza-page.module').then( m => m.PizzaPagePageModule)
  },
  {
    path: 'ingredients-administration',
    loadChildren: () => import('./pages/ingredients-administration/ingredients-administration.module').then( m => m.IngredientsAdministrationPageModule)
  },
  {
    path: 'pizzas-administration',
    loadChildren: () => import('./pages/pizzas-administration/pizzas-administration.module').then( m => m.PizzasAdministrationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodAndRecipesPage } from './food-and-recipes.page';

const routes: Routes = [
  {
    path: '',
    component: FoodAndRecipesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodAndRecipesPage]
})
export class FoodAndRecipesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuitsClothingPage } from './suits-clothing.page';

const routes: Routes = [
  {
    path: '',
    component: SuitsClothingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuitsClothingPage]
})
export class SuitsClothingPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SweatersClothingPage } from './sweaters-clothing.page';

const routes: Routes = [
  {
    path: '',
    component: SweatersClothingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SweatersClothingPage]
})
export class SweatersClothingPageModule {}

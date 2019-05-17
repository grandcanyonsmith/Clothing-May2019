import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TShirtsClothingPage } from './t-shirts-clothing.page';

const routes: Routes = [
  {
    path: '',
    component: TShirtsClothingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TShirtsClothingPage]
})
export class TShirtsClothingPageModule {}

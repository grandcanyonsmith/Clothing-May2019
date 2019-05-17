import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HoodiesClothingPage } from './hoodies-clothing.page';

const routes: Routes = [
  {
    path: '',
    component: HoodiesClothingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HoodiesClothingPage]
})
export class HoodiesClothingPageModule {}

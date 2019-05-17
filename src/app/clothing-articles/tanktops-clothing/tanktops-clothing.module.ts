import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TanktopsClothingPage } from './tanktops-clothing.page';

const routes: Routes = [
  {
    path: '',
    component: TanktopsClothingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TanktopsClothingPage]
})
export class TanktopsClothingPageModule {}

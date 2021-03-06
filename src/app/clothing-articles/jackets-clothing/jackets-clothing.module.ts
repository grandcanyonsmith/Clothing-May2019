import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JacketsClothingPage } from './jackets-clothing.page';

const routes: Routes = [
  {
    path: '',
    component: JacketsClothingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JacketsClothingPage]
})
export class JacketsClothingPageModule {}

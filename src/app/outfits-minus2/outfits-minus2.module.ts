import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OutfitsMinus2Page } from './outfits-minus2.page';

const routes: Routes = [
  {
    path: '',
    component: OutfitsMinus2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OutfitsMinus2Page]
})
export class OutfitsMinus2PageModule {}

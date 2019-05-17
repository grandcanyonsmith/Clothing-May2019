import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OutfitsMinus1Page } from './outfits-minus1.page';

const routes: Routes = [
  {
    path: '',
    component: OutfitsMinus1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OutfitsMinus1Page]
})
export class OutfitsMinus1PageModule {}

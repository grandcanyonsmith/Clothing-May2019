import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FullOutfitsPage } from './full-outfits.page';

const routes: Routes = [
  {
    path: '',
    component: FullOutfitsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FullOutfitsPage]
})
export class FullOutfitsPageModule {}

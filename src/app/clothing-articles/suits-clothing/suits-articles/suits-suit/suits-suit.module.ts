import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuitsSuitPage } from './suits-suit.page';

const routes: Routes = [
  {
    path: '',
    component: SuitsSuitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuitsSuitPage]
})
export class SuitsSuitPageModule {}

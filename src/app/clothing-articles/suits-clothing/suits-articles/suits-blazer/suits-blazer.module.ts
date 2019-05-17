import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuitsBlazerPage } from './suits-blazer.page';

const routes: Routes = [
  {
    path: '',
    component: SuitsBlazerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuitsBlazerPage]
})
export class SuitsBlazerPageModule {}

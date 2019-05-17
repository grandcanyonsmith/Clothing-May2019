import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuitsTuxPage } from './suits-tux.page';

const routes: Routes = [
  {
    path: '',
    component: SuitsTuxPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuitsTuxPage]
})
export class SuitsTuxPageModule {}

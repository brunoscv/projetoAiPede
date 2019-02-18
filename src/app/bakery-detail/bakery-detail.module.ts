import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BakeryDetailPage } from './bakery-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BakeryDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BakeryDetailPage]
})
export class BakeryDetailPageModule {}

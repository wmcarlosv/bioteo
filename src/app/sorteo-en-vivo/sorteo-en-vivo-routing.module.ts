import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SorteoEnVivoPage } from './sorteo-en-vivo.page';

const routes: Routes = [
  {
    path: '',
    component: SorteoEnVivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SorteoEnVivoPageRoutingModule {}

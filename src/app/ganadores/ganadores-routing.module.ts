import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GanadoresPage } from './ganadores.page';

const routes: Routes = [
  {
    path: '',
    component: GanadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GanadoresPageRoutingModule {}

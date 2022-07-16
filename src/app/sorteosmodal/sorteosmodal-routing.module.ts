import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SorteosmodalPage } from './sorteosmodal.page';

const routes: Routes = [
  {
    path: '',
    component: SorteosmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SorteosmodalPageRoutingModule {}

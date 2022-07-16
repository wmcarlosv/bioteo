import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadosAnterioresPage } from './resultados-anteriores.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadosAnterioresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadosAnterioresPageRoutingModule {}

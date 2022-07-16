import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children :[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'resultados-anteriores',
        loadChildren: () => import('../resultados-anteriores/resultados-anteriores.module').then( m => m.ResultadosAnterioresPageModule)
      },
      {
        path: 'sorteo-en-vivo',
        loadChildren: () => import('../sorteo-en-vivo/sorteo-en-vivo.module').then( m => m.SorteoEnVivoPageModule)
      },
      {
        path: 'ganadores',
        loadChildren: () => import('../ganadores/ganadores.module').then( m => m.GanadoresPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
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
      },
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    IonicModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadosAnterioresPageRoutingModule } from './resultados-anteriores-routing.module';

import { ResultadosAnterioresPage } from './resultados-anteriores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadosAnterioresPageRoutingModule
  ],
  declarations: [ResultadosAnterioresPage]
})
export class ResultadosAnterioresPageModule {}

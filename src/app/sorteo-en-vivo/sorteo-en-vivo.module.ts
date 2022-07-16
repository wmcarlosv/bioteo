import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SorteoEnVivoPageRoutingModule } from './sorteo-en-vivo-routing.module';

import { SorteoEnVivoPage } from './sorteo-en-vivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SorteoEnVivoPageRoutingModule
  ],
  declarations: [SorteoEnVivoPage]
})
export class SorteoEnVivoPageModule {}

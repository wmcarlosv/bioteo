import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GanadoresPageRoutingModule } from './ganadores-routing.module';

import { GanadoresPage } from './ganadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GanadoresPageRoutingModule
  ],
  declarations: [GanadoresPage]
})
export class GanadoresPageModule {}

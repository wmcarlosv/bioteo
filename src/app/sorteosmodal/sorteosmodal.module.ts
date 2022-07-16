import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SorteosmodalPageRoutingModule } from './sorteosmodal-routing.module';

import { SorteosmodalPage } from './sorteosmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SorteosmodalPageRoutingModule
  ],
  declarations: [SorteosmodalPage]
})
export class SorteosmodalPageModule {}

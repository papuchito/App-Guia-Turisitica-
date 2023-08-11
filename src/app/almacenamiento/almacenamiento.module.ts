import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlmacenamientoPageRoutingModule } from './almacenamiento-routing.module';

import { AlmacenamientoPage } from './almacenamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlmacenamientoPageRoutingModule
  ],
  declarations: [AlmacenamientoPage]
})
export class AlmacenamientoPageModule {}

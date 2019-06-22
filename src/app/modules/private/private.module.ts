import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { FormConvencionalModule } from './modules/form-convencional/form-convencional.module';
import { FormCustomizadoModule } from './modules/form-customizado/form-customizado.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormConvencionalModule,
    FormCustomizadoModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }

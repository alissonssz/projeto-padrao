import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciasDiretiva } from './diretiva-sigla/iniciais-diretiva.directive';

@NgModule({
  declarations: [
    IniciasDiretiva
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IniciasDiretiva
  ]
})
export class SharedDirectivesModule { }

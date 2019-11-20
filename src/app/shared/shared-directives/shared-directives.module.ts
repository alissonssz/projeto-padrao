import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciasDiretiva } from './diretiva-sigla/iniciais-diretiva.directive';
import { DiretivaValidacao } from './diretiva-validacao.directive';

@NgModule({
  declarations: [
    IniciasDiretiva,
    DiretivaValidacao
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IniciasDiretiva,
    DiretivaValidacao
  ]
})
export class SharedDirectivesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { RadioInputControlComponent } from './radio-input-control/radio-input-control.component';
import { ContainerPadraoComponent } from './container-padrao/container-padrao.component';
import { CardIniciaisUsuariosComponent } from './card-iniciais-usuarios/card-iniciais-usuarios.component';
import { SharedDirectivesModule } from '../shared-directives/shared-directives.module';
import { ModalExemploComponent } from './modal-exemplo/modal-exemplo.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    RadioInputControlComponent, 
    ContainerPadraoComponent,
    CardIniciaisUsuariosComponent,
    ModalExemploComponent
  ],
  entryComponents: [
    ModalExemploComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedDirectivesModule
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    RadioInputControlComponent, 
    ContainerPadraoComponent, 
    CardIniciaisUsuariosComponent, ModalExemploComponent]
})
export class SharedComponentsModule { }

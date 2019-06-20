import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { PublicRoutingModule } from './public-routing.module';


@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedComponentsModule
  ],
  exports: [InicioComponent]
})
export class PublicModule { }

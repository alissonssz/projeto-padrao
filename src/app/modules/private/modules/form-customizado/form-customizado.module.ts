import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCustomizadoRoutingModule } from './form-customizado-routing.module';
import { FormAlteradoComponent } from './components/form-alterado/form-alterado.component';

@NgModule({
  declarations: [FormAlteradoComponent],
  imports: [
    CommonModule,
    FormCustomizadoRoutingModule
  ],
  exports: [FormAlteradoComponent]
})
export class FormCustomizadoModule { }

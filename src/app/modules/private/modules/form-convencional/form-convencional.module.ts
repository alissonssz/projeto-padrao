import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormConvencionalRoutingModule } from './form-convencional-routing.module';
import { FormClassicoComponent } from './components/form-classico/form-classico.component';

@NgModule({
  declarations: [FormClassicoComponent],
  imports: [
    CommonModule,
    FormConvencionalRoutingModule
  ],
  exports: [FormClassicoComponent]
})
export class FormConvencionalModule { }

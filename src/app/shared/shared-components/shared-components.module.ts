import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { RadioInputControlComponent } from './radio-input-control/radio-input-control.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    RadioInputControlComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, RadioInputControlComponent]
})
export class SharedComponentsModule { }

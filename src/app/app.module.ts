import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { PublicModule } from './modules/public/public.module';
import { PrivateModule } from './modules/private/private.module';
import { SharedComponentsModule } from './shared/shared-components/shared-components.module';
import { FormConvencionalModule } from './modules/private/modules/form-convencional/form-convencional.module';
import { FormCustomizadoModule } from './modules/private/modules/form-customizado/form-customizado.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    PublicModule,
    PrivateModule,
    SharedComponentsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

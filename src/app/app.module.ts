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


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    PublicModule,
    PrivateModule,
    SharedComponentsModule,
    FormConvencionalModule,
    FormCustomizadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

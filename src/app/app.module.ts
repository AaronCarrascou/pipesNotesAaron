import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    PrimeNgModule,

    SharedModule,
    VentasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

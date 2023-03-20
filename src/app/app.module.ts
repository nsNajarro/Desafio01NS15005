import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CderechaComponent } from './app/cderecha/cderecha.component';
import { CizquierdaComponent } from './app/cizquierda/cizquierda.component';
import { CinferiorComponent } from './app/cinferior/cinferior.component';

@NgModule({
  declarations: [
    AppComponent,
    CderechaComponent,
    CizquierdaComponent,
    CinferiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

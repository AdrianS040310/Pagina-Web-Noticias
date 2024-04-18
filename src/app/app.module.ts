import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormularioJassComponent } from './components/formulario-jass/formulario-jass.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';
import { NavbarJassComponent } from './components/navbar-jass/navbar-jass.component';
import { SpinnerJassComponent } from './shared/spinner-jass/spinner-jass.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioJassComponent,
    ListadoNoticiasComponent,
    NavbarJassComponent,
    SpinnerJassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

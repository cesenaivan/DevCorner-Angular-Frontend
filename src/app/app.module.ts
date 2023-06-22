import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SeccioncomentariosComponent } from './componentes/seccioncomentarios/seccioncomentarios.component';
import { CarouselComponent } from './componentes/carousel/carousel.component'; // Importa
import { MainComponent } from './componentes/main/main.component'; // Importa
import { GuiaComponent } from './componentes/guia/guia.component'; // Importa
import { CardsComponent } from './componentes/cards/cards.component'; // Importa
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component'; // Importa

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SeccioncomentariosComponent,
    CarouselComponent, // Declara
    MainComponent, // Declara
    GuiaComponent, // Declara
    CardsComponent,
    ContactoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

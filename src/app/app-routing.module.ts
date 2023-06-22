import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { MainComponent } from './componentes/main/main.component';
import { GuiaComponent } from './componentes/guia/guia.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';



const routes: Routes = [
  { path: 'carousel', component: CarouselComponent },
  { path: 'main', component: MainComponent },
  { path: 'guia', component: GuiaComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SearchComponent } from './componentes/search/search.component';
import { SpotyService } from './servicios/spotyService';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PlaylistComponent } from './componentes/playlist/playlist.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    SearchComponent,
    ArtistaComponent,
    DomseguroPipe,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SpotyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

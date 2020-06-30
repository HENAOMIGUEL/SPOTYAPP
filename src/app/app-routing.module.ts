import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SearchComponent } from './componentes/search/search.component';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { PlaylistComponent } from './componentes/playlist/playlist.component';


const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'search/:name',component:SearchComponent},
  {path:'artista/:id',component:ArtistaComponent},
  {path:'playList',component:PlaylistComponent},
  {path:'**',pathMatch:'full',redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

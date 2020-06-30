import { Component, OnInit } from '@angular/core';
import { SpotyService } from 'src/app/servicios/spotyService';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {

  listaNewReleases : any[]=[];

  constructor(private spotyService:SpotyService) { }



  ngOnInit() {
    this.spotyService.getNewReleases()
    .subscribe( (data : any)=>{
      this.listaNewReleases = data.albums.items;
      console.log(data);
    });
      
    this.spotyService.deletePlaylist();
  }

}

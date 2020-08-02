import { Component, OnInit } from '@angular/core';
import { SpotyService } from 'src/app/servicios/spotyService';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {

  listaNewReleases : any[]=[];
  albums : any[] = [];
  constructor(private spotyService:SpotyService) { }



  ngOnInit() {
    this.spotyService.getNewReleases()
    .subscribe( (data : any)=>{
      this.listaNewReleases = data.albums.items;
      this.albums = data.albums;
      console.log(data);  
    });
      
    this.spotyService.deletePlaylist();
  }


  goNext(){
    this.spotyService.getNextExitos(this.albums.next)
        .subscribe((data : any)=>{
          this.listaNewReleases = data.albums.items;
          this.albums = data.albums;

          console.log(this.listaNewReleases[0].name);  

        });
  }

  goPrevious(){
    this.spotyService.getPreviousExitos(this.albums.previous)
        .subscribe((data : any)=>{
          this.listaNewReleases = data.albums.items;
          this.albums = data.albums;

          console.log(this.listaNewReleases[0].name);  

        });
  }
}

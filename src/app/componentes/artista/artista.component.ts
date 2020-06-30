import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotyService } from 'src/app/servicios/spotyService';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista : any = {};
  tracks : any[] = [];


  constructor(private activatedRoute : ActivatedRoute,
              private spotyService : SpotyService) { }

  ngOnInit() {
    this.activatedRoute.params 
        .subscribe( (params)=>{
      this.spotyService.getArtistaByID(params['id'])
          .subscribe( (data : any)=>{
            this.artista = data;
          });

      this.spotyService.getTracksArtista(params['id'])
            .subscribe( (data : any)=>{
              this.tracks = data.tracks;
              console.log(data.tracks);

            });
      
        });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotyService } from 'src/app/servicios/spotyService';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  artistasConsultados: any[] = [];

  constructor(private activatedRouter: ActivatedRoute,
              private spotyService: SpotyService,
              private route : Router) { }

  ngOnInit() {
    this.activatedRouter.params
      .subscribe((params) => {

        this.spotyService.searchArtistas(params['name'])
          .subscribe((data: any) => {
            this.artistasConsultados =  data.artists.items;
            console.log(data);
          });
      });
  }



  detalleArtista(id : string){
    this.route.navigate(['artista',id]);
  }

}

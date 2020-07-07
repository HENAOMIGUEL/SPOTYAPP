import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotyService } from 'src/app/servicios/spotyService';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  tracks: any[] = [];
  //DATOS PARA GUARDAR EN PLAYLIST
  misPlaylist: any[] = [];
  playlistID;
  cancionID;
  //para albumes del artista
  albums : any[] = [];
  isAlbumesPressed = false;
  isAlbumesDetailPressed = false;
  albumSelected : any ;
  tracksByAlbum : any [];

  constructor(private activatedRoute: ActivatedRoute,
    private spotyService: SpotyService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params) => {
        //lista de mis playlists
        this.spotyService.getMyPlaylists()
          .subscribe((data: any) => {
            this.misPlaylist = data.items;
          });
        this.spotyService.getArtistaByID(params['id'])
          .subscribe((data: any) => {
            this.artista = data;
          });

        this.spotyService.getTracksArtista(params['id'])
          .subscribe((data: any) => {
            this.tracks = data.tracks;
            console.log(data.tracks);

          });

      });
  }


  guardarEnPlaylist() {
    console.log(this.playlistID);

    if (this.playlistID == null) {
      alert("Hey hey, debe guardar la song en alguna playlist");
    } else {
      this.spotyService.addItemToPlaylist(this.playlistID,this.cancionID).subscribe();
     
    }
  }

  pasarCancionID(cancionID: string) {
    console.log(this.cancionID);

    this.cancionID = cancionID;
  }


  verArtistAlbums(artistaId : string){
    if(this.albums.length == 0){
      this.spotyService.getArtistAlbums(artistaId)
      .subscribe((data : any)=>{
        this.albums = data.items;
        console.log(data);
        console.log("BUSCA ALBUMES");
      });
    }

    this.isAlbumesPressed = true;   
    this.isAlbumesDetailPressed = false;

  }

  verArtistExitos(){
    this.isAlbumesPressed = false;
  }

  albumDetail(album : any){
    this.isAlbumesDetailPressed = true;
    this.albumSelected = album;


    this.spotyService.getAlbumTracks(album.id)
        .subscribe((data : any)=>{
          console.log(data)
          this.tracksByAlbum = data.items;
        });
  }

}

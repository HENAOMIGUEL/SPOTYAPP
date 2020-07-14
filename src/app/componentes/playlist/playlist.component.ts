import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotyService } from 'src/app/servicios/spotyService';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.css']
})
export class PlaylistComponent implements OnInit {

  misPlaylist: any[] = [];
  canciones: any[] = [];
  playlistName;
  rutaPlayerPlaylist;

  constructor(private router: Router,
    private spotyService: SpotyService) { }

  ngOnInit() {
    this.spotyService.getMyPlaylists()
      .subscribe((data: any) => {
        this.misPlaylist = data.items;
      });
  }


  verCancionesPlaylist(playlistID: string, playlistName: string) {
    this.playlistName = playlistName;

    this.rutaPlayerPlaylist = "";
    this.rutaPlayerPlaylist =playlistID;

    console.log(this.rutaPlayerPlaylist);
    
    this.spotyService.getPlaylistItems(playlistID)
      .subscribe((data: any) => {
        this.canciones = data.items;
        
        console.log(this.canciones);
      });

  }

  addNewPlaylist(nombre : string , detail : string) {

    var body = {
      "name": nombre,
      "description": detail,
      "public": false
    }
    
     this.spotyService.addPlaylist(body);
  }

}

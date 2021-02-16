import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotyService {

    listaMisPlaylist: any[] = [];
   

    constructor(private httpClient: HttpClient) { }

    getHeaders() {

        /*let header = new HttpHeaders();
        header = header.set('Authorization', '---'
        );*/
        const headers = new HttpHeaders({
            'Authorization': 'Bearer '
        });

        return headers;
    }

    getNewReleases() {
        var headers = this.getHeaders();

        //return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases?limit=10', { headers });

        return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases?offset=5&limit=5', { headers });

    }


    searchArtistas(artista: string) {
        var headers = this.getHeaders();

        return this.httpClient.get('https://api.spotify.com/v1/search?q=' + artista + '&type=artist&limit=20', { headers });
    }


    getArtistaByID(id: string) {
        var headers = this.getHeaders();

        return this.httpClient.get('https://api.spotify.com/v1/artists/' + id, { headers });
    }

    getTracksArtista(id: string) {
        var headers = this.getHeaders();
        console.log(headers);
        

        return this.httpClient.get('https://api.spotify.com/v1/artists/' + id + '/top-tracks?country=CO&limit=20', { headers });
    }

    deletePlaylist() {
        console.log("borr1");
        var id = "2tWpCxz4M0nPr1OKcup6t7";
        var headers = this.getHeaders();
        console.log("borr2");


        this.httpClient.delete('https://api.spotify.com/v1/me/albums?ids=2tWpCxz4M0nPr1OKcup6t7', { headers }).subscribe();
        console.log("borr3");

    }

    getMyPlaylists() {
        var headers = this.getHeaders();


        return this.httpClient.get('https://api.spotify.com/v1/me/playlists', { headers });

    }

    getPlaylistItems(playlistID: string) {
        var headers = this.getHeaders();

        return this.httpClient.get('https://api.spotify.com/v1/playlists/' + playlistID + '/tracks', { headers });

    }

    addPlaylist(nuevaPlaylist: any) {
        var headers = this.getHeaders();

        console.log("asdgasdgh");
        this.httpClient.post('https://api.spotify.com/v1/users/' + '31cuvytbm7pdozh3uxttvjpisk7u' + '/playlists', nuevaPlaylist, { headers }).subscribe();

    }


    getUserProfileInfo() {
        var headers = this.getHeaders();
        console.log(headers);
        

        return this.httpClient.get('https://api.spotify.com/v1/me', { headers });
      

    }


    addItemToPlaylist(playlistId: string, songUri: string) {
       
        var headers = this.getHeaders();
        
        console.log(1);
                          
    // return this.httpClient.post<any>('https://api.spotify.com/v1/playlists/4tNqf8yTqQ2oFpwHF7mMBJ/tracks?uris=spotify%3Atrack%3A3CKCZ9pfwAfoMZlMncA1Nc', { headers });

         return this.httpClient.post('https://api.spotify.com/v1/playlists/'+playlistId+'/tracks?uris='+songUri,null, { headers });
    }

    getArtistAlbums(artistaId : string){
        var headers = this.getHeaders();
        
        return this.httpClient.get('https://api.spotify.com/v1/artists/'+artistaId+'/albums', { headers });

    }

    getAlbumTracks(albumId : string){
        var headers = this.getHeaders();
        
        return this.httpClient.get('https://api.spotify.com/v1/albums/'+albumId+'/tracks', { headers });

    }

    getNextExitos(urlNext : string){

        var headers = this.getHeaders();
        
        return this.httpClient.get(urlNext, { headers });

    }

    getPreviousExitos(urlPrevious : string){

        var headers = this.getHeaders();
        
        return this.httpClient.get(urlPrevious, { headers });

    }

}   

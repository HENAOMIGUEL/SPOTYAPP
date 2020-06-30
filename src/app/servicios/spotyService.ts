import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotyService {

    constructor(private httpClient: HttpClient) { }

    getHeaders() {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer BQDpo18z4g8UIHSU32V65TcWPPwoXMFsqD_dVrzOPmXun5Fpyiu_ukMIoTJ1O4csL-OR9m_vWFwTU4XdoxFWEnCEEReoIMnMqmWoPF9E6cvHy5946ggkLMRTm5FD-Q5-wIl3xEeOUsS8xuvukZXjOzhG1ZdTkuXYIuSXdPBt5yvYGMwmK4sAVwo1ph03cyjE9_t_Rnay9yZOwQ9rz6Sy7M7tbjS35_ihmhx_uuOdcmSqC-qsHD2462yxINjVqa17Ukpw_SVINwFUemQTSluVLa8M8A8qixtvnh26'
        });

        return headers;
    }

    getNewReleases() {
        var headers = this.getHeaders();
        
        //return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases?limit=10', { headers });

        return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases?offset=5&limit=20', { headers });

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

    getMyPlaylists(){
        var headers = this.getHeaders();

        return this.httpClient.get('https://api.spotify.com/v1/me/playlists', { headers });
    }

    getPlaylistItems(playlistID : string){
        var headers = this.getHeaders();

        return this.httpClient.get('https://api.spotify.com/v1/playlists/'+playlistID+'/tracks', { headers });

    }

    addPlaylist(nuevaPlaylist : any){
        var headers = this.getHeaders();
      
          console.log("asdgasdgh");
    this.httpClient.post('https://api.spotify.com/v1/users/'+'31cuvytbm7pdozh3uxttvjpisk7u'+'/playlists',nuevaPlaylist, { headers }).subscribe();

    }


    getUserProfileInfo(){
        var headers = this.getHeaders();


        return this.httpClient.get('https://api.spotify.com/v1/me', { headers });

    }
}
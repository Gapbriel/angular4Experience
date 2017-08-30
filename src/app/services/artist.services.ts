import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AppConfig } from '../app.config';
import 'rxjs/add/operator/map';

@Injectable()
export class ArtistService {

    constructor(
        private http: Http,
        private appConfig: AppConfig
    ) {}

    getAlbums() {
        console.log('asd');
    }

    getFavorites() : any[] {
        return [];
    }

    searchArtistByName(name: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer ' + this.appConfig.access_token});
        let options = new RequestOptions({ headers: headers} );
        let apiUrl = this.appConfig.url + 'search?q=' + name + '&type=artist';
        return this.http.get(apiUrl, options).map(res => res.json());
    }

    getArtist(id: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer ' + this.appConfig.access_token});
        let options = new RequestOptions({ headers: headers} );
        let apiUrl = this.appConfig.url + 'artists/' + id;
        return this.http.get(apiUrl, options).map(res => res.json());
    }

    getArtistAlbums(id: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer ' + this.appConfig.access_token});
        let options = new RequestOptions({ headers: headers} );
        let apiUrl = this.appConfig.url + 'artists/' + id + '/albums';
        return this.http.get(apiUrl, options).map(res => res.json());
    }

    getAlbumById(id: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer ' + this.appConfig.access_token});
        let options = new RequestOptions({ headers: headers} );
        let apiUrl = this.appConfig.url + 'albums/' + id;
        return this.http.get(apiUrl, options).map(res => res.json());
    }

    getTracksById(ids: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer ' + this.appConfig.access_token});
        let options = new RequestOptions({ headers: headers} );
        let apiUrl = this.appConfig.url + 'tracks?ids=' + ids;
        return this.http.get(apiUrl, options).map(res => res.json());
    }

    processMaxAlbums(albums:Object[]){
        let max=0;
        var arrAlbums=[];
        albums.forEach(function (argument) {
             if (max <= argument['disc_number']){
                 max = argument['disc_number'];
             }
        });

        for (let i = 1; i <= max; i++) {
            var newArr = albums.filter(function(item){
                return item['disc_number'] === i;
            });
            var album = {
                discNumber : i,
                tracksItems : newArr
            }
            arrAlbums.push(album);
        }    
        return arrAlbums;
    }
}
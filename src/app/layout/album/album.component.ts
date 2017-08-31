import { Component,OnInit} from '@angular/core';
import { ArtistService } from '../../services/artist.services';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/groupBy';

@Component({
    selector: 'album-layout',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.less']
})
export class AlbumComponent implements OnInit{
	tracks : any[];
    maxAlbums : any[];
    artistInfo : object;
	constructor(
		private artistService : ArtistService,
        private route : ActivatedRoute
	){}

    getAlbumById(id:string){
        const result = this.artistService.getAlbumById(id)
        .map(res => res.tracks.items); 
        result.subscribe(val => this.maxAlbums=this.artistService.processMaxAlbums(val)); 
    }

     searchArtistInfo(id:string){
        this.artistService.getArtist(id)
        .subscribe( res => {
            this.artistInfo = res;
        });
    }

    ngOnInit(){
        this.route.params
        .subscribe( params => {
            this.getAlbumById(params['id']);
            
        });    
    }

}
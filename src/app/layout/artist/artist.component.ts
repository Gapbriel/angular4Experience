import { Component,OnInit} from '@angular/core';
import { ArtistService } from '../../services/artist.services';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'artist-layout',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.less']
})
export class ArtistComponent implements OnInit{
	private albums : object[];
    private artistInfo : object;
	constructor(
		private artistService : ArtistService,
        private route : ActivatedRoute
	){}

    searchArtistAlbums(id:string){
        this.artistService.getArtistAlbums(id)
        .subscribe( res => {
            this.albums = res.items;
        });
    }

     searchArtistInfo(id:string){
        this.artistService.getArtist(id)
        .subscribe( res => {
            this.artistInfo = res;
            debugger;
        });
    }

    ngOnInit(){
        this.route.params.subscribe( params => {
            this.searchArtistAlbums(params['id']);
            this.searchArtistInfo(params['id'])
        });    
    }

}
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
	constructor(
		private artistService : ArtistService,
        private route : ActivatedRoute
	){}

    ngOnInit(){
        this.route.params.subscribe( params => {
            this.searchEvent(params['id']);
        });    
    }

    searchEvent(id:string){
        this.artistService.getArtist(id)
        .subscribe( res => {
            this.albums = res.albums.items;
        });
    }
}
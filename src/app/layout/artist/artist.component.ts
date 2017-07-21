import { Component} from '@angular/core';
import { ArtistService } from '../../services/artist.services';
@Component({
    selector: 'artist-layout',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.less']
})
export class ArtistComponent {
	private albums : object[];
	constructor(
		private artistService : ArtistService
	){}

    searchEvent(event:any){
        if (!!event){
            this.artistService.getArtist(event)
            .subscribe( res => {
                this.albums = res.albums.items;
            });
        }else{
            this.albums = null;
        }
    }
}
import { Component} from '@angular/core';
import { ArtistService } from '../../services/artist.services';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent {
	private favArtists : object[];
	private search: string;
	constructor(
		private artistService : ArtistService
	){}

    searchEvent(event:any){
        if (!!event){
            this.artistService.searchArtistByName(event)
            .subscribe( res => {
                this.favArtists = res.artists.items;
            });
        }else{
            this.favArtists = null;
        }
    }
}
import { Component,OnInit} from '@angular/core';
import { ArtistService } from '../../services/artist.services';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent  implements OnInit{
	private favArtists : object[];
	private search: string;
	constructor(
		private artistService : ArtistService
	){}

    ngOnInit() {
        this.searchArtists();
    }

	searchArtists() {
        this.search = "pink";
        this.artistService.searchArtistByName(this.search).subscribe( res => {
            this.favArtists = res.artists.items;
        });
    }
}
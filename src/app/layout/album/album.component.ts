import { Component,OnInit} from '@angular/core';
import { ArtistService } from '../../services/artist.services';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'album-layout',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.less']
})
export class AlbumComponent implements OnInit{
	private tracks : object[];
    //private artistInfo : object;
	constructor(
		private artistService : ArtistService,
        private route : ActivatedRoute
	){}

    getAlbumById(id:string){
        this.artistService.getAlbumById(id)
        .subscribe( res => {
            this.tracks = res.tracks.items;
        });
    }

    //  searchArtistInfo(id:string){
    //     this.artistService.getArtist(id)
    //     .subscribe( res => {
    //         this.artistInfo = res;
    //     });
    // }

    ngOnInit(){
        this.route.params.subscribe( params => {
            this.getAlbumById(params['id']);
        });    
    }

}
import {Component,Input,OnInit} from '@angular/core';
import { ArtistService } from '../../../services/artist.services';
@Component({
  selector: 'disc-table-list',
  templateUrl: 'discTable-list.component.html',
  styleUrls: ['discTable-list.component.less'],
})
export class DiscTableListComponent implements OnInit{
	@Input() data: object;
	private disksArray: object[];
	constructor(
		private artistService : ArtistService
	){}

	ngOnInit(){
		console.log(this.data);
	}

}
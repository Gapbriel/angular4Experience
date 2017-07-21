import {Component,Input,OnInit} from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.less'],
})
export class CardComponent implements OnInit {
	@Input() data : object;
	@Input() id : string;	
	imgSrc : string;
	link : string;
		ngOnInit() {
			if (!!this.data) {
				this.imgSrc =  !!(this.data["images"].length) ? (this.data["images"][0].url) : null;
				switch (this.data["type"]) {
					case "artist":
						this.link = '/artist/detail/' + this.id;
						break;
					case "album":
						this.link = '/album/' + this.id;
						break;
				}
			}
		}
	}

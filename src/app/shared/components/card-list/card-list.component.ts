import {Component,Input} from '@angular/core';
@Component({
  selector: 'card-list-spotify',
  templateUrl: 'card-list.component.html',
  styleUrls: ['card-list.component.less'],
})
export class CardListComponent{
	@Input() data: object[];
}
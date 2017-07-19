import {Component,Input} from '@angular/core';
import {MdCardModule} from '@angular/material';

@Component({
  selector: 'card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.less'],
})
export class CardComponent {
	@Input() data: object;
}
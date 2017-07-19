import { Component,Output,EventEmitter} from '@angular/core';
import { MdInputModule} from '@angular/material';

@Component({
  selector: 'input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.less']
})
export class InputSearchComponent {
	@Output() 
	searchInputEvent : EventEmitter<string> =  new EventEmitter<string>();
	values = '';
	onKey(value: string) {
    	this.searchInputEvent.emit(value);
  	}	
}
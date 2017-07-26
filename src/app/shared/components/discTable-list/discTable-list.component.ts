import {Component,Input} from '@angular/core';
@Component({
  selector: 'disc-table-list',
  templateUrl: 'discTable-list.component.html',
  styleUrls: ['discTable-list.component.less'],
})
export class DiscTableListComponent{
	@Input() data: object[];
}
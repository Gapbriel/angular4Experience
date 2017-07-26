import {Component,Input} from '@angular/core';
@Component({
  selector: 'disc-table',
  templateUrl: 'discTable.component.html',
  styleUrls: ['discTable.component.less'],
})
export class DiscTableComponent{
	@Input() data: object[];
}
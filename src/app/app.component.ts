import { Component, ViewEncapsulation } from '@angular/core';
import {MdToolbarModule} from '@angular/material';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public greeting = 'Hello Deloitte!';

  changeGreeting() {
    this.greeting = 'You button-clicker!';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'wt-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  url: string = 'http://rocketmind.pl';
  linkText: string = "RocketMind";
}

import { Component } from '@angular/core';

interface MenuItem {
  value: string;
  text: string;
}

@Component({
  selector: 'wt-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  mainMenuLinks: MenuItem[] = [
    {value: '', text: 'Home'},

    {value: 'heroes', text: 'Heroes'},
    {value: 'cities-map', text: 'Cities Map'},
    {value: 'map-search', text: 'Map Search'}
  ];
}

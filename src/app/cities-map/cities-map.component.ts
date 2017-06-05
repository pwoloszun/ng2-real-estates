import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

@Component({
  templateUrl: "./cities-map.component.html"
})
export class CitiesMapComponent {

  cities$: Observable<Object[]>;
  myCities: Object[] = [];

  constructor() {
    this.myCities = [
      {title: "Lublin", lat: 51.15, lng: 22.34},
      {title: "Rzeszów", lat: 50.0409, lng: 21.9992},
      {title: "Łódź", lat: 51.45, lng: 19.27},
      {title: "Kraków", lat: 50.06465, lng: 19.94498},
      {title: "Warszawa", lat: 52.14, lng: 21.0},
      {title: "Szczecin", lat: 53.25, lng: 14.35}
    ];
    this.cities$ = Observable.of(this.myCities);
  }

  onPlaceClick(city: any) {
    console.log("google map PAGE click:", city, "index:", this.myCities.indexOf(city));
  }
}

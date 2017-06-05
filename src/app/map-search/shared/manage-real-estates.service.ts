import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { RealEstate } from "./real-estate.model";

@Injectable()
export class ManageRealEstatesService {

  selectedRealEstate: RealEstate = null;
  realEstates$: BehaviorSubject<RealEstate[]> = new BehaviorSubject([]);

  fetch() {
    // TODO: use RealEstateService#getAll()
  }

  toggleRealEstate(estate: RealEstate) {
    // TODO
  }
}

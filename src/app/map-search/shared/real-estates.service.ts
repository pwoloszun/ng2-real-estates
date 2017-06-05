import { Injectable } from "@angular/core";

import { RealEstate } from './real-estate.model';
import { DataApiService } from "../../core/core.module";

@Injectable()
export class RealEstatesService extends DataApiService<RealEstate> {
  getUrl(): string {
    return 'assets/server/real-estates.json';
  }
}

import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/delay';

@Injectable()
export class DataApiService<T> {
  constructor(private http: Http) {
  }

  getAll(): Observable<T[]> {
    return this.getJson();
  }

  getById(id: number): Observable<T> {
    return this.getJson()
      .mergeMap((realEstates: any[]) => realEstates)
      .find((re) => +re.id === +id);
  }

  getUrl(): string {
    throw new Error('Abstract method');
  }

  private getJson(): Observable<T[]> {
    return this.http.get(this.getUrl())
      .map((response: Response) => response.json())
      .delay(1200);
  }

}

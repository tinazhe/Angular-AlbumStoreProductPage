import { Response, Http } from '@angular/http';
import { Injectable } from '@angular/core';
// import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map(response => {
      return response.json();
      // console.log(`Res: ${response.json()}`)
    })
  }

}

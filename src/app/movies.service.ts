import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient: HttpClient) { }

  getTrending(media: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${media}/day?api_key=9c6c8ba103419cc7831bde76b8e77503`)
  }

}

import { MoviesService } from 'src/app/services/movies.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies:Array<any> = [];
  tv: Array<any> = [];
  person: Array<any> = [];
  imgSrc: string = 'https://image.tmdb.org/t/p/w500'
  constructor(public _AuthService: AuthService, private _MoviesService: MoviesService) {

  }
  ngOnInit(): void {

    this._MoviesService.getTrending('movie').subscribe((res) => {
      this.movies = res.results.slice(0, 10);
    });
    this._MoviesService.getTrending('tv').subscribe((res) => {
      this.tv = res.results.slice(0, 10);
    });
    this._MoviesService.getTrending('person').subscribe((res) => {
      this.person = res.results.slice(0, 10);
    });
  }
  
  




}

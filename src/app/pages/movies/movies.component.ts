import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movie: Array<any> = [];
  imgSrc: string = 'https://image.tmdb.org/t/p/w500'
  constructor(private _MoviesService: MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe((res) => {
      this.movie = res.results.slice(0, 18);
    });
  }

}

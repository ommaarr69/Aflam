import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})

export class TvComponent implements OnInit {
  tv: Array<any> = [];
  imgSrc: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesService: MoviesService) { }


  ngOnInit(): void {
    this._MoviesService.getTrending('tv').subscribe((res) => {
      this.tv = res.results.slice(0, 18);
    });
  }
}



import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people: Array<any> = [];
  imgSrc: string = 'https://image.tmdb.org/t/p/w500'

  constructor(private _MoviesService: MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getTrending('person').subscribe((res) => {
      this.people = res.results.slice(0, 18);
    });
  }

}

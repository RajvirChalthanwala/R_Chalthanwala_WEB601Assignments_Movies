import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { MessageService } from './services/message.service';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'R_Chalthanwala_Movies';
  movieId: number = 3;
  oneMovieById: any = {};

  constructor(private MovieService: MovieService) { }

  ngOnInit() {
    this.findMovieById();
  }

  findMovieById() {
    this.MovieService.getMovieById(this.movieId).subscribe((result: any) => {
      if (typeof result === "object") {
        this.oneMovieById = result;
      }
    });
  }
}

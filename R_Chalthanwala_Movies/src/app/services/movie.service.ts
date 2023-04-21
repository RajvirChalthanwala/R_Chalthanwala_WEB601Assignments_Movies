import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private MessageService: MessageService) { }

  getMovies(): Observable<Content[]> {
    const movies = contents;
    this.MessageService.add("Content array loaded!");
    return of(movies);
  }

  getMovieById(id: number): Observable<any> {
    const movie = contents.find(content => content.id === id);

    if (movie) {
      this.MessageService.add(`Content Item at id: ${id}`);
      return of(movie);
    }
    this.MessageService.add("Invalid Id");
    return of("Invalid Id");
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  constructor(private http: HttpClient, private MessageService: MessageService) { }

  getMovies(): Observable<Content[]> {
    const movies = contents;
    this.MessageService.add("Content array loaded!");
    return of(movies);
  }

  addMovie(newMovie: Content): Observable<Content> {
    this.MessageService.add(`New Movie added`);
    return this.http.post<Content>("/api/movies", newMovie, this.httpOptions);
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

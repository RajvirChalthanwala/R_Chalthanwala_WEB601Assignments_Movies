import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newMovie: any = {};
  @Output() addMovieEvent = new EventEmitter<Content>();

  addNewMovie() {
    this.addMovieEvent.emit(this.newMovie);
    this.newMovie = {};
  }
}

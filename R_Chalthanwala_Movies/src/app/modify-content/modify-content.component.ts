import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newMovie: any = {};
  @Output() addMovieEvent = new EventEmitter<Content>();

  constructor(public dialog: MatDialog, private MessageService: MessageService) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddContentDialogComponent, {
      width: '60%'
    });
    dialogRef.afterClosed().subscribe(newMovieFromDialog => {
      if (newMovieFromDialog) {
        if (newMovieFromDialog.title && newMovieFromDialog.description && newMovieFromDialog.creator) {
          this.newMovie = newMovieFromDialog;
          this.addNewMovie();
        } else {
          this.MessageService.add('No content added. Required fields were empty');
        }
      }
    });
  }

  addNewMovie() {
    this.addMovieEvent.emit(this.newMovie);
    this.newMovie = {};
  }
}

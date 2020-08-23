import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormAddNoteMatComponent } from '../form-add-note-mat/form-add-note-mat.component';
import { Note } from '../note';

@Component({
  selector: 'app-notes-display',
  templateUrl: './notes-display.component.html',
  styleUrls: ['./notes-display.component.css']
})
export class NotesDisplayComponent {


  constructor(private dialog: MatDialog) {}

  openDialog(editNote?: Note): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      note: editNote
    };

    this.dialog.open(FormAddNoteMatComponent, dialogConfig);
  }



}

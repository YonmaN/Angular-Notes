import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NotesService } from '../notes.service';
import { Note } from '../note';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-add-note-mat',
  templateUrl: './form-add-note-mat.component.html',
  styleUrls: ['./form-add-note-mat.component.css']
})
export class FormAddNoteMatComponent implements OnInit {
  public control: FormGroup;
  public note: Note;

  constructor(private notesService: NotesService, private dialog: MatDialogRef<FormAddNoteMatComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
      if (typeof data.note === 'undefined') {
        this.note = new Note();
      } else {
        this.note = data.note;
      }
  }

  ngOnInit(): void {
    this.control = new FormGroup({
      author: new FormControl(this.note.author),
      content: new FormControl(this.note.content)
    });

  }

  save(): void {
    // this.dialog.close(this.form.value);
    // this.dialog.close();
    if (this.control.valid) {
      if (typeof this.note.id === 'undefined' || this.note.id === null) {
        this.notesService.addNote({author: this.control.value.author, content: this.control.value.content} as Note);
      } else { /// side effect!
        this.note.author = this.control.value.author;
        this.note.content = this.control.value.content;
      }
      this.dialog.close(this.control.value);
    }
  }

  close(): void {
    this.dialog.close();
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../note';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {

  public notes: NotesService;
  @Output() public AddNote = new EventEmitter();
  @Output() public EditNote = new EventEmitter();

  constructor(notes: NotesService) {
    this.notes = notes;
  }

  ngOnInit(): void {
  }

  openFormAddNote(): void {
    this.AddNote.emit();
  }

  openFormEditNote(note: Note): void {
    this.EditNote.emit(note);
  }

  deleteNote(note: Note): void  {
    this.notes.deleteNote(note);
  }

}

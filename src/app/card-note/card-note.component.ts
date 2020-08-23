import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-card-note',
  templateUrl: './card-note.component.html',
  styleUrls: ['./card-note.component.css', '../card.css']
})
export class CardNoteComponent implements OnInit {

  @Input() public note: Note;
  @Output() public noteDeleted = new EventEmitter();
  @Output() public contentClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.noteDeleted.emit(this.note);
  }

  openEdit(): void {
    this.contentClicked.emit(this.note);
  }

}

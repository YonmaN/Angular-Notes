import { Injectable } from '@angular/core';
import { Note } from './note';
import { FragmentStoreService } from './fragment-store.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private nextId = 1;
  private notes: Array<Note> = [];

  constructor(private store: FragmentStoreService) {
    if (this.store.notEmpty()) {
      this.notes = this.store.load((item) => item as Note);
    } else {
      this.addNote({ author: 'Yonni Mendes', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec pretium vulputate sapien nec. Pretium fusce id velit ut tortor pretium. Purus in massa tempor nec feugiat nisl pretium fusce. Risus pretium quam vulputate dignissim suspendisse in. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Consequat nisl vel pretium lectus quam id. Adipiscing tristique risus nec feugiat in fermentum. Ullamcorper malesuada proin libero nunc consequat interdum varius. Id diam vel quam elementum pulvinar etiam non quam. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. In metus vulputate eu scelerisque felis imperdiet proin.' } as Note);
    }

    // extract the largest id to continue counting correctly
    const maxNote: Note = this.notes.reduce( ( p, i ) => i > p ? i : p );
    this.nextId = maxNote.id + 1;
  }

  getNotes(): Array<Note> {
    return this.notes.sort(( a: Note, b: Note ) => a.created - b.created);
  }

  addNote(note: Note): void {
    note.id = this.nextId++;
    note.created = (new Date()).getTime();
    this.notes.push(note);
    this.store.store(this.notes);
  }

  deleteNote(note: Note): void {
    this.notes = this.notes.filter((n) => {
      return n.id !== note.id;
    });
    this.store.store(this.notes);
  }
}

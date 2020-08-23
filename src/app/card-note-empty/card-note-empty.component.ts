import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-note-empty',
  templateUrl: './card-note-empty.component.html',
  styleUrls: ['./card-note-empty.component.css', '../card.css']
})
export class CardNoteEmptyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public createNote(): void {
    return ;
  }

}

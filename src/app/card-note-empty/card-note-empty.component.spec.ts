import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNoteEmptyComponent } from './card-note-empty.component';

describe('CardNoteEmptyComponent', () => {
  let component: CardNoteEmptyComponent;
  let fixture: ComponentFixture<CardNoteEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNoteEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNoteEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

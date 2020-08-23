import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardNoteComponent } from './card-note/card-note.component';
import { FragmentStoreService } from './fragment-store.service';
import { NotesService } from './notes.service';
import { CardNoteEmptyComponent } from './card-note-empty/card-note-empty.component';
import { AppRoutingModule } from './app-routing.module';
import { NotesDisplayComponent } from './notes-display/notes-display.component';
import { YouYouGuardService } from './auth/you-you-guard.service';
import { IAmService } from './auth/i-am.service';
import { LoginComponent } from './auth/login/login.component';
import { CookieModule } from 'ngx-cookie';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormAddNoteMatComponent } from './form-add-note-mat/form-add-note-mat.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    CardsListComponent,
    CardNoteComponent,
    CardNoteEmptyComponent,
    NotesDisplayComponent,
    FormAddNoteMatComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CookieModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [
    NotesService,
    FragmentStoreService,
    YouYouGuardService,
    IAmService,
    LoginComponent
  ],
  entryComponents: [
    FormAddNoteMatComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

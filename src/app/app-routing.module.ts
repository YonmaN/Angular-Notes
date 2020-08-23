import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YouYouGuardService } from './auth/you-you-guard.service';
import { NotesDisplayComponent } from './notes-display/notes-display.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: NotesDisplayComponent ,
    canActivate: [YouYouGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

import { Component } from '@angular/core';
import { YouYouGuardService } from '../you-you-guard.service';
import { IAmService } from '../i-am.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private auth: IAmService, private router: Router) { }

  login(): void {
    this.auth.Iam();
    this.router.navigate(['']);
  }

}

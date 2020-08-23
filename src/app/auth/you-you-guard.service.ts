import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { IAmService } from './i-am.service';

@Injectable({
  providedIn: 'root'
})
export class YouYouGuardService implements CanActivate {

  constructor(private auth: IAmService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (! this.auth.amI()) {
      this.router.navigate(['login']);
    }
    return this.auth.amI();
  }

}

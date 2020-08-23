import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';


@Injectable({
  providedIn: 'root'
})
export class IAmService {

  private iAm: boolean;
  constructor(private cookieService: CookieService) {
    this.iAm = this.cookieService.get('itsme') === 'yes';
  }

  amI(): boolean {
    return this.iAm;
  }

  Iam(): void {
    this.iAm = true;
    this.cookieService.put('itsme', 'yes');
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FragmentStoreService {

  constructor() {}

  store(items: any): void {
    window.location.hash = btoa(JSON.stringify(items));
  }

  notEmpty(): boolean {
    return window.location.hash.length > 1 && window.location.hash !== '#W10='; /// empty array
  }

  load(deserialise: (n: any) => any): [] {
    const vehicle = JSON.parse(atob(window.location.hash.substr(1)));
    if (typeof vehicle === 'object') {
      return vehicle.map(deserialise);
    }
    return [];
  }

}



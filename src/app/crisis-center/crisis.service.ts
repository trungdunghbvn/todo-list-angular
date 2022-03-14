import { Injectable } from '@angular/core';

import { map, Observable, of } from 'rxjs';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  [x: string]: any;

  getCrises(): Observable<Crisis[]> {
    const heroes = of(CRISES);
    return heroes;
  }

  getCrise(id: number | string) {
    return this.getCrises().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Crisis[]) => heroes.find(hero => hero.id === +id)!)
    );
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

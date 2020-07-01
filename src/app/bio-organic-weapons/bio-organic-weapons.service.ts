import { Injectable } from '@angular/core';

import { BioOrganicWeapon } from './models/bio-organic-weapon.model';
import { Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class BioOrganicWeaponsService {
  bowsUpdated = new Subject<BioOrganicWeapon[]>();
  newOrEditMod = new Subject<boolean>();

  private bows: BioOrganicWeapon[] = [];

  constructor() { }



  private getUpdateBowList(): void {
    this.bowsUpdated.next(this.bows.slice());
  }

  getBows(): BioOrganicWeapon[] {
    return this.bows.slice();
  }

  addNewBow(bow: BioOrganicWeapon) {
    this.bows.push(bow);
    this.getUpdateBowList();
  }

  upDateBow(bow: BioOrganicWeapon) {
    const bowIndex = this.bows.findIndex(_ => _.id === bow.id);
    this.bows[bowIndex] = bow;
    this.getUpdateBowList();
  }


  getBow(id: number) {
    return this.bows.find(_ => _.id === id);
  }


  deleteBow(id: number) {
    this.bows = this.bows.filter(_ => _.id !== id);
    this.getUpdateBowList();
  }

  getBowFromStorage(bows: BioOrganicWeapon[]) {
    this.bows = bows;
    this.getUpdateBowList();
  }

}

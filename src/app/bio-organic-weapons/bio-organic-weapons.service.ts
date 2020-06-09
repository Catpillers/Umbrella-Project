import { Injectable, Output, EventEmitter } from '@angular/core';

import { BioOrganicWeapon } from './models/bio-organic-weapon.model';
import { Subject } from 'rxjs';
import { Upgrade } from '../shared/upgrade.model';


@Injectable({
  providedIn: 'root'
})

export class BioOrganicWeaponsService {
  addBowToDetails = new EventEmitter<BioOrganicWeapon>();

  private bows: BioOrganicWeapon[] = [
    new BioOrganicWeapon('Nemesis', 'T-03', './assets/img/Nemesis.png',
    [
      new Upgrade('M134 Minigun', 1),
      new Upgrade('Kevlar coat', 1)
    ]),

    new BioOrganicWeapon('Mr.X', 'T-00', './assets/img/T-00.webp',
    [
      new Upgrade('Kevlar coat', 1),
      new Upgrade('Kevlar hat', 1)
    ])
  ];


  getBows(): BioOrganicWeapon[] {
    return this.bows.slice();
  }

  constructor() { }
}

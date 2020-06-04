import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { BioOrganicWeapon } from '../models/bio-organic-weapon.model';

@Component({
  selector: 'app-bio-organic-weapon-list',
  templateUrl: './bio-organic-weapon-list.component.html',
  styleUrls: ['./bio-organic-weapon-list.component.scss']
})
export class BioOrganicWeaponListComponent implements OnInit {
@Output() addBowToList: EventEmitter<any> = new EventEmitter();


bows: BioOrganicWeapon[]  = [
   new BioOrganicWeapon('Nemesis', 'Type-03', './assets/img/Nemesis.png')
 ];

  constructor() { }

  ngOnInit() {
  }

  sendBowToList(data: BioOrganicWeapon) {
    this.addBowToList.emit(data);
  }

}

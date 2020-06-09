import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { BioOrganicWeapon } from '../models/bio-organic-weapon.model';
import { BioOrganicWeaponsService } from '../bio-organic-weapons.service';

@Component({
  selector: 'app-bio-organic-weapon-list',
  templateUrl: './bio-organic-weapon-list.component.html',
  styleUrls: ['./bio-organic-weapon-list.component.scss']
})
export class BioOrganicWeaponListComponent implements OnInit {
  bows: BioOrganicWeapon[];

  constructor(private bowService: BioOrganicWeaponsService) { }

  ngOnInit() {
    this.bows = this.bowService.getBows();
  }
}

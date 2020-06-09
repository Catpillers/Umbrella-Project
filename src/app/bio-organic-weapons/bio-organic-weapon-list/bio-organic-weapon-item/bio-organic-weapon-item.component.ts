import { Component, OnInit, Input } from '@angular/core';

import { BioOrganicWeapon } from '../../models/bio-organic-weapon.model';
import { BioOrganicWeaponsService } from '../../bio-organic-weapons.service';

@Component({
  selector: 'app-bio-organic-weapon-item',
  templateUrl: './bio-organic-weapon-item.component.html',
  styleUrls: ['./bio-organic-weapon-item.component.scss']
})
export class BioOrganicWeaponItemComponent implements OnInit {
  @Input() bow: BioOrganicWeapon;

  constructor(private bowService: BioOrganicWeaponsService) { }

  ngOnInit() {
  }

  sendBowDataToList() {
      this.bowService.addBowToDetails.emit(this.bow);
  }

}

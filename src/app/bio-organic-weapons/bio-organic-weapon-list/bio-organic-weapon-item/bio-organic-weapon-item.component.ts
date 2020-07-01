import { Component, OnInit, Input } from '@angular/core';

import { BioOrganicWeapon } from '../../models/bio-organic-weapon.model';



@Component({
  selector: 'app-bio-organic-weapon-item',
  templateUrl: './bio-organic-weapon-item.component.html',
  styleUrls: ['./bio-organic-weapon-item.component.scss']
})
export class BioOrganicWeaponItemComponent implements OnInit {
  @Input() bow: BioOrganicWeapon;

  constructor() { }

  ngOnInit() {
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { BioOrganicWeapon } from '../models/bio-organic-weapon.model';

@Component({
  selector: 'app-bio-organic-weapon-detail',
  templateUrl: './bio-organic-weapon-detail.component.html',
  styleUrls: ['./bio-organic-weapon-detail.component.scss']
})
export class BioOrganicWeaponDetailComponent implements OnInit {
 @Input() bow: BioOrganicWeapon;
  constructor() { }

  ngOnInit() {
  }

}

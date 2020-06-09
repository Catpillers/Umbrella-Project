import { Component, OnInit, Input } from '@angular/core';
import { BioOrganicWeapon } from '../models/bio-organic-weapon.model';
import { BioOrganicWeaponsService } from '../bio-organic-weapons.service';
import { BlackMarketService } from 'src/app/blackmarket-list/black-market.service';
import { Upgrade } from 'src/app/shared/upgrade.model';

@Component({
  selector: 'app-bio-organic-weapon-detail',
  templateUrl: './bio-organic-weapon-detail.component.html',
  styleUrls: ['./bio-organic-weapon-detail.component.scss']
})
export class BioOrganicWeaponDetailComponent implements OnInit {
  bow: BioOrganicWeapon;

  constructor(private bowService: BioOrganicWeaponsService, private marketService: BlackMarketService) { }

  ngOnInit() {
    this.bowService.addBowToDetails.subscribe((context: BioOrganicWeapon) => {
      this.bow = context;
    });
  }

  sendUpgrads() {
    this.marketService.getBowUpgrades(this.bow.upgrades);
  }

}

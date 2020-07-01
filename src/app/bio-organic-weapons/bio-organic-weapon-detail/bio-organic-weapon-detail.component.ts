import { Component, OnInit, Input } from '@angular/core';
import { BioOrganicWeapon } from '../models/bio-organic-weapon.model';
import { BioOrganicWeaponsService } from '../bio-organic-weapons.service';
import { BlackMarketService } from 'src/app/blackmarket-list/black-market.service';
import { Upgrade } from 'src/app/shared/upgrade.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-bio-organic-weapon-detail',
  templateUrl: './bio-organic-weapon-detail.component.html',
  styleUrls: ['./bio-organic-weapon-detail.component.scss']
})
export class BioOrganicWeaponDetailComponent implements OnInit {
  bow: BioOrganicWeapon;

  constructor(private bowService: BioOrganicWeaponsService,
              private marketService: BlackMarketService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.bow = this.bowService.getBow(+param.id);
    });
  }

  sendUpgrads() {
    this.marketService.getBowUpgrades(this.bow.upgrades, this.bow.imagePath);
  }

  disposeOfBow() {
    this.bowService.deleteBow(this.bow.id);
    this.router.navigate(['/bio-organic-weapons']);
  }

  editMode() {
    this.bowService.newOrEditMod.next(true);
  }

}

import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

import { BioOrganicWeapon } from '../models/bio-organic-weapon.model';
import { BioOrganicWeaponsService } from '../bio-organic-weapons.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bio-organic-weapon-list',
  templateUrl: './bio-organic-weapon-list.component.html',
  styleUrls: ['./bio-organic-weapon-list.component.scss']
})
export class BioOrganicWeaponListComponent implements OnInit, OnDestroy {
  bows: BioOrganicWeapon[];

  private bowUpgradesSubscription: Subscription;

  constructor(private bowService: BioOrganicWeaponsService,
              private router: Router) { }

  ngOnInit() {
    this.bows = this.bowService.getBows();
    this.bowUpgradesSubscription = this.bowService.bowsUpdated
      .subscribe(_ => {
        this.bows = _;
      });
  }

  ngOnDestroy() {
    this.bowUpgradesSubscription.unsubscribe();
  }

  newBow() {
    this.router.navigate(['new']);
  }
}

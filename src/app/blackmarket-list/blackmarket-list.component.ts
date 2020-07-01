import { Component, OnInit, OnChanges, DoCheck, OnDestroy } from '@angular/core';

import { Upgrade } from '../shared/upgrade.model';
import { BlackMarketService } from './black-market.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blackmarket-list',
  templateUrl: './blackmarket-list.component.html',
  styleUrls: ['./blackmarket-list.component.css']
})
export class BlackmarketListComponent implements OnInit, OnDestroy {
  upgrades: Upgrade[];
  private upgradesSubscription: Subscription;

  constructor(private marketService: BlackMarketService) { }

  ngOnInit() {
    this.upgrades = this.marketService.getUpgrades();
    this.upgradesSubscription = this.marketService.updatedUpgrades
      .subscribe((context: Upgrade[]) => {
        this.upgrades = context;
      });
  }

  ngOnDestroy() {
    this.upgradesSubscription.unsubscribe();
  }


  editExistingUpgrade(index: number) {
      this.marketService.editUpgrade.next(index);
  }
}

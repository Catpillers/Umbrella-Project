import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

import { Upgrade } from '../shared/upgrade.model';
import { BlackMarketService } from './black-market.service';

@Component({
  selector: 'app-blackmarket-list',
  templateUrl: './blackmarket-list.component.html',
  styleUrls: ['./blackmarket-list.component.css']
})
export class BlackmarketListComponent implements OnInit {
  upgrades: Upgrade[];

  constructor(private marketService: BlackMarketService) { }

  ngOnInit() {
    this.upgrades = this.marketService.getUpgrades();
    this.marketService.updatedUpgrades.subscribe((context: Upgrade[]) => {
      this.upgrades = context;
    });
  }
}

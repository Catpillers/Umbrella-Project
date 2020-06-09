import { Injectable } from '@angular/core';
import { Upgrade } from '../shared/upgrade.model';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class BlackMarketService {
  updatedUpgrades = new Subject<Upgrade[]>();

  private upgrades: Upgrade[];

  constructor() { }

  getBowUpgrades(bowUpgrades: Upgrade[]) {
    this.upgrades = bowUpgrades;
  }

  getUpgrades(): Upgrade[] {
    return this.upgrades.slice();
  }

  getUpdatedUpgrades() {
    this.updatedUpgrades.next(this.upgrades.slice());
  }

  addUpgrade(data: Upgrade) {
    this.upgrades.push(data);
    this.getUpdatedUpgrades();
  }

  deleteUpgrade() {
    this.upgrades.pop();
    this.getUpdatedUpgrades();
  }

  clearUpgrades() {
    this.upgrades = [];
    this.getUpdatedUpgrades();
  }

}

import { Injectable } from '@angular/core';
import { Upgrade } from '../shared/upgrade.model';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class BlackMarketService {
  updatedUpgrades = new Subject<Upgrade[]>();
  editUpgrade = new Subject<number>();
  image: string;

  private upgrades: Upgrade[] = [];

  constructor() { }

  getBowUpgrades(bowUpgrades: Upgrade[], bowImage: string) {
    this.upgrades = bowUpgrades;
    this.image = bowImage;
  }

  getUpgrades(): Upgrade[] {
    return this.upgrades.slice();
  }

 private getUpdatedUpgrades() {
    this.updatedUpgrades.next(this.upgrades.slice());
  }

  getUpgrade(index: number) {
    return this.upgrades[index];
  }

  addUpgrade(data: Upgrade) {
    this.upgrades.push(data);
    this.getUpdatedUpgrades();
  }

  updateUpgrade(upgrade: Upgrade, index: number) {
    this.upgrades[index] = upgrade;
    this.getUpdatedUpgrades();
  }

  deleteUpgrade(index: number) {
    this.upgrades.splice(index, 1);
    this.getUpdatedUpgrades();
  }
}

import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { Upgrade } from 'src/app/shared/upgrade.model';
import { BlackMarketService } from '../black-market.service';

@Component({
  selector: 'app-blackmarket-edit',
  templateUrl: './blackmarket-edit.component.html',
  styleUrls: ['./blackmarket-edit.component.css']
})
export class BlackmarketEditComponent implements OnInit {


  @ViewChild('nameInput') upgradeName: ElementRef;
  @ViewChild('amountInput') upgradeAmout: ElementRef;
  @ViewChild('blackMarket') mainForm: ElementRef;


  constructor(private marketService: BlackMarketService) { }

  ngOnInit() {
  }

  onAddUpgrade(event: Event) {
    event.preventDefault();
    const upgrade = new Upgrade(this.upgradeName.nativeElement.value,
      this.upgradeAmout.nativeElement.value);
    this.marketService.addUpgrade(upgrade);
  }

  deleteUpgrade(event: Event) {
    event.preventDefault();
    this.marketService.deleteUpgrade();
  }

  deleteUpgrades(event: Event) {
    event.preventDefault();
    this.marketService.clearUpgrades();
  }

}

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Upgrade } from 'src/app/shared/upgrade.model';
import { BlackMarketService } from '../black-market.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blackmarket-edit',
  templateUrl: './blackmarket-edit.component.html',
  styleUrls: ['./blackmarket-edit.component.css']
})
export class BlackmarketEditComponent implements OnInit, OnDestroy {
  @ViewChild('blackMarketForm') blackMarketForm: NgForm;
  editUpgrade: Subscription;
  upgrade: Upgrade;
  editMode = false;
  upgradeIndex: number;

  constructor(private marketService: BlackMarketService) { }

  ngOnInit() {
    this.editUpgrade = this.marketService.editUpgrade.subscribe((index) => {
      console.log(index);
      this.editMode = true;
      this.upgradeIndex = index;
      this.upgrade = this.marketService.getUpgrade(index);
      this.blackMarketForm.setValue({
        name: this.upgrade.name,
        amount: this.upgrade.amount
      });
    });
  }

  onAddUpgrade() {
    const upgrade = new Upgrade(this.blackMarketForm.value.name, this.blackMarketForm.value.amount);
    if (this.editMode) {
      this.marketService.updateUpgrade(upgrade, this.upgradeIndex);
      this.blackMarketForm.reset();
      this.editMode = false;
    } else {
      this.marketService.addUpgrade(upgrade);
      this.blackMarketForm.reset();
    }
  }


  deleteUpgrade() {
    this.marketService.deleteUpgrade(this.upgradeIndex);
    this.reset();
  }

  reset() {
    this.blackMarketForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.editUpgrade.unsubscribe();
  }
}

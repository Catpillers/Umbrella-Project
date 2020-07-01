import { Component, OnInit, OnDestroy, OnChanges, DoCheck } from '@angular/core';
import { BioOrganicWeaponsService } from './bio-organic-weapons.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-bio-organic-weapons',
  templateUrl: './bio-organic-weapons.component.html',
  styleUrls: ['./bio-organic-weapons.component.scss']
})
export class BioOrganicWeaponsComponent implements OnInit, OnDestroy {
  newOrEditMod = false;
  subscription: Subscription;

  constructor(private bowServie: BioOrganicWeaponsService) { }

  ngOnInit() {
    this.subscription = this.bowServie.newOrEditMod.subscribe(context => {
      this.newOrEditMod = context;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.newOrEditMod = false;
  }

}

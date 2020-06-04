import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BioOrganicWeapon } from '../../models/bio-organic-weapon.model';

@Component({
  selector: 'app-bio-organic-weapon-item',
  templateUrl: './bio-organic-weapon-item.component.html',
  styleUrls: ['./bio-organic-weapon-item.component.scss']
})
export class BioOrganicWeaponItemComponent implements OnInit {
  @Output() addBowToList: EventEmitter<any> = new EventEmitter();
  @Input() bow: BioOrganicWeapon;
  constructor() { }

  ngOnInit() {
  }


  sendBowDataToList() {
    this.addBowToList.emit(this.bow);
    console.log(this.bow);
  }

}

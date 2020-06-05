import { Component, OnInit } from '@angular/core';

import { Upgrade } from '../shared/upgrade.model';

@Component({
  selector: 'app-blackmarket-list',
  templateUrl: './blackmarket-list.component.html',
  styleUrls: ['./blackmarket-list.component.css']
})
export class BlackmarketListComponent implements OnInit {
  upgrades: Upgrade[] = [
    new Upgrade('M134 Minigun', 1),
    new Upgrade('Kevlar coat', 1)
  ];

  nstructor() { }

  ngOnInit() {
  }

}

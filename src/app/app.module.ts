import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { BioOrganicWeaponListComponent } from './bio-organic-weapons/bio-organic-weapon-list/bio-organic-weapon-list.component';
import { BioOrganicWeaponDetailComponent } from './bio-organic-weapons/bio-organic-weapon-detail/bio-organic-weapon-detail.component';
import { BioOrganicWeaponItemComponent } from './bio-organic-weapons/bio-organic-weapon-list/bio-organic-weapon-item/bio-organic-weapon-item.component';
import { BlackmarketListComponent } from './blackmarket-list/blackmarket-list.component';
import { BlackmarketEditComponent } from './blackmarket-list/blackmarket-edit/blackmarket-edit.component';
import { BioOrganicWeaponsComponent } from './bio-organic-weapons/bio-organic-weapons.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { BioOrganicWeaponsService } from './bio-organic-weapons/bio-organic-weapons.service';
import { BlackMarketService } from './blackmarket-list/black-market.service';




@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      BioOrganicWeaponsComponent,
      BioOrganicWeaponListComponent,
      BioOrganicWeaponDetailComponent,
      BioOrganicWeaponItemComponent,
      BlackmarketListComponent,
      BlackmarketEditComponent,
      DropdownDirective
   ],
   imports: [
      BrowserModule,
      NgbModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot()
   ],
   providers: [
      BioOrganicWeaponsService,
      BlackMarketService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

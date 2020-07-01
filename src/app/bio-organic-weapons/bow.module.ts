import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { BioOrganicWeaponsComponent } from './bio-organic-weapons.component';
import { BioOrganicWeaponListComponent } from './bio-organic-weapon-list/bio-organic-weapon-list.component';
import { BioOrganicWeaponDetailComponent } from './bio-organic-weapon-detail/bio-organic-weapon-detail.component';
import { BioOrganicWeaponItemComponent } from './bio-organic-weapon-list/bio-organic-weapon-item/bio-organic-weapon-item.component';
import { BioOrganicWeaponEditComponent } from './bio-organic-weapon-edit/bio-organic-weapon-edit.component';
import { BowRoutingModule } from './bow.routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        BioOrganicWeaponsComponent,
        BioOrganicWeaponListComponent,
        BioOrganicWeaponDetailComponent,
        BioOrganicWeaponItemComponent,
        BioOrganicWeaponEditComponent,

    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        BowRoutingModule,
        BsDropdownModule,
        RouterModule
    ],
    exports: [BowRoutingModule],
    providers: []
})

export class BioOrganicWeaponsModule {}

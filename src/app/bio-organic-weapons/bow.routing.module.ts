import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BioOrganicWeaponsComponent } from './bio-organic-weapons.component';
import { AuthGuard } from '../auth/auth.guard';
import { SelectBioOrganicWeaponComponent } from './select-bio-organic-weapon/select-bio-organic-weapon.component';
import { BioOrganicWeaponDetailComponent } from './bio-organic-weapon-detail/bio-organic-weapon-detail.component';
import { BioOrganicWeaponEditComponent } from './bio-organic-weapon-edit/bio-organic-weapon-edit.component';
import { BioOrganicWeaponResolver } from './bio-organic-weapon.resolver.service';


const routes: Routes = [
    {
        path: '',
        component: BioOrganicWeaponsComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: SelectBioOrganicWeaponComponent },

            {
                path: ':id',
                component: BioOrganicWeaponDetailComponent,
                resolve: [BioOrganicWeaponResolver]
            },

            {
                path: ':id/edit',
                component: BioOrganicWeaponEditComponent,
                resolve: [BioOrganicWeaponResolver]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BowRoutingModule { }

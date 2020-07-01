import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BioOrganicWeapon } from './models/bio-organic-weapon.model';
import { DataStorageService } from '../shared/data-storage.service';
import { BioOrganicWeaponsService } from './bio-organic-weapons.service';

@Injectable({
    providedIn: 'root'
})

export class BioOrganicWeaponResolver implements Resolve<BioOrganicWeapon[]> {
    constructor(private dataStorage: DataStorageService, private bowService: BioOrganicWeaponsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.bowService.getBows()) {
            return this.dataStorage.get();
        }
    }
}
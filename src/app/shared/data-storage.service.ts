import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { BioOrganicWeapon } from '../bio-organic-weapons/models/bio-organic-weapon.model';
import { BioOrganicWeaponsService } from '../bio-organic-weapons/bio-organic-weapons.service';
import { map, tap } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})

export class DataStorageService {

    constructor(private bowService: BioOrganicWeaponsService,
                private http: HttpClient) { }

    get() {
        return this.http.get<BioOrganicWeapon[]>('https://umbrellaprojrct.firebaseio.com/bow.json').pipe(
            map(data => {
                return data.map(bow => {
                    return { ...bow, upgrades: bow.upgrades ? bow.upgrades : [] };
                });
            }),
            tap(data => {
                this.bowService.getBowFromStorage(data);
            })
        );
    }

    post() {
        const bows = this.bowService.getBows();
        if (bows.length !== 0) {
            this.http.put('https://umbrellaprojrct.firebaseio.com/bow.json', bows).subscribe();
        }
    }

}


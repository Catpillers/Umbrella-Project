import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { BioOrganicWeaponsService } from '../bio-organic-weapons/bio-organic-weapons.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {
    isAuthenticated: boolean = false;
    userSab: Subscription;
    constructor(
        private bowService: BioOrganicWeaponsService,
        private dataService: DataStorageService,
        private authService: AuthService) { }

    ngOnInit() {
        this.userSab = this.authService.user.subscribe(data => {
            if (data) {
                setTimeout(() => {
                    this.isAuthenticated = true;
                }, 2000);
            } else {
                this.isAuthenticated = false;
            }
        });
    }

    newOrEditMod() {
        this.bowService.newOrEditMod.next(false);
    }

    sendBowData() {
        this.dataService.post();
    }

    getBowData() {
        this.dataService.get().subscribe();
    }

    logOut() {
        this.authService.logOut();
    }

    ngOnDestroy() {
        this.userSab.unsubscribe();
    }
}


import { NgModule } from '@angular/core';

import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { BioOrganicWeaponEditComponent } from './bio-organic-weapons/bio-organic-weapon-edit/bio-organic-weapon-edit.component';
import { AuthGuard } from './auth/auth.guard';




const routes: Routes = [
    { path: '', redirectTo: '/authentication', pathMatch: 'full' },
    { path: 'bio-organic-weapons', loadChildren: () => import('./bio-organic-weapons/bow.module').then(m => m.BioOrganicWeaponsModule) },
    { path: 'blackmarket', loadChildren: () => import('./blackmarket-list/blackmarket.module').then(m => m.BlackMarketModule) },
    { path: 'authentication', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'new', component: BioOrganicWeaponEditComponent, canActivate: [AuthGuard] },
];


@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRouteModule { }

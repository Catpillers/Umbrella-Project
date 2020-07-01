import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackmarketListComponent } from './blackmarket-list.component';
import { AuthGuard } from '../auth/auth.guard';



const routes: Routes = [
    { path: '', component: BlackmarketListComponent, canActivate: [AuthGuard] }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BlackMarketRoutingModule { }

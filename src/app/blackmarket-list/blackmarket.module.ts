import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlackmarketListComponent } from './blackmarket-list.component';
import { BlackmarketEditComponent } from './blackmarket-edit/blackmarket-edit.component';
import { BlackMarketRoutingModule } from './blackmarket.routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        BlackmarketListComponent,
        BlackmarketEditComponent,
    ],
    imports: [
        CommonModule,
        BlackMarketRoutingModule,
        BsDropdownModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class BlackMarketModule { }

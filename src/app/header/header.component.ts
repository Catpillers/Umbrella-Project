import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    @Output() changeComponent = new EventEmitter<string>();

    changeToBowData() {
        this.changeComponent.emit('bow');
    }

    changeToMarketData() {
        this.changeComponent.emit('market');
    }
}

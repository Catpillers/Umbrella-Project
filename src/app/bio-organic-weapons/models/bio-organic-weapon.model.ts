import { Upgrade } from 'src/app/shared/upgrade.model';

export class BioOrganicWeapon {
    constructor(public name: string,
                public description: string,
                public imagePath: string,
                public upgrades: Upgrade[]) { }
}

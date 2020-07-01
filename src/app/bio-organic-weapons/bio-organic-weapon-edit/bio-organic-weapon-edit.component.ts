import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { BioOrganicWeaponsService } from '../bio-organic-weapons.service';
import { BioOrganicWeapon } from '../models/bio-organic-weapon.model';

@Component({
  selector: 'app-bio-organic-weapon-edit',
  templateUrl: './bio-organic-weapon-edit.component.html',
  styleUrls: ['./bio-organic-weapon-edit.component.scss']
})
export class BioOrganicWeaponEditComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private bowService: BioOrganicWeaponsService,
              private router: Router) { }
  id: number;
  editMode = false;
  bowForm: FormGroup;
  bowImage: string;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params.id != null;
      this.initForm();
    });
  }

  initForm() {
    let bowName = '';
    let bowDescription = '';
    let bowImage = '';
    const bowUpgrades = this.fb.array([]);

    if (this.editMode) {
      const bow: BioOrganicWeapon = this.bowService.getBow(this.id);
      bowName = bow.name;
      bowDescription = bow.description;
      bowImage = bow.imagePath;
      if (bow.upgrades) {
        for (const upgrade of bow.upgrades) {
          bowUpgrades.push(this.fb.group({
            name: [upgrade.name, Validators.required],
            amount: [upgrade.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]]
          }));
        }
      }
    }

    this.bowForm = this.fb.group({
      name: [bowName, Validators.required],
      imagePath: [bowImage, Validators.required],
      information: [bowDescription, Validators.required],
      upgrades: bowUpgrades
    });
  }

  createBow() {
    const bow = new BioOrganicWeapon(
      this.id || this.addUID(),
      this.bowForm.value.name,
      this.bowForm.value.information,
      this.bowForm.value.imagePath,
      this.bowForm.value.upgrades
    );

    if (this.editMode) {
      this.bowService.upDateBow(bow);
    } else {
      this.bowService.addNewBow(bow);
    }

    this.router.navigate(['../'], { relativeTo: this.route });
  }

  addUID(): number {
    return Math.floor(Math.random() * 100);
  }

  newUpgrade() {
    const control = this.bowForm.get('upgrades') as FormArray;
    const upgrade = this.fb.group({
      name: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]]
    });
    control.push(upgrade);
  }

  deleteUpgrade(index: number) {
    const control = this.bowForm.get('upgrades') as FormArray;
    control.removeAt(index);
  }

  clearBowForm() {
    this.bowForm.reset();
  }

}

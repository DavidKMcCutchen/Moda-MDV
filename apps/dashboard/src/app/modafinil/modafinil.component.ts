import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emptyModa, Modafinil } from '@modafinil/api-interfaces';
import { ModafinilFacade } from '@modafinil/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'modafinil-modafinil',
  templateUrl: './modafinil.component.html',
  styleUrls: ['./modafinil.component.scss']
})
export class ModafinilComponent implements OnInit {
  allModafinils$: Observable<Modafinil[]> = this.modafinilFacade.allModafinils$;
  selectedModafinil$: Observable<Modafinil> = this.modafinilFacade.selectedModafinil$;

  form: FormGroup;

  constructor(
    private modafinilFacade: ModafinilFacade,
    private formBuilder: FormBuilder
  ) {
    this.modafinilFacade.mutations$.subscribe((_) => this.resetModafinil());
  }

  ngOnInit() {
    this.initForm();
    this.modafinilFacade.loadModafinils();
    this.resetModafinil()
  }

  selectModafinil(modafinil: Modafinil) {
    this.form.patchValue(modafinil);
    this.modafinilFacade.selectModafinil(modafinil.id)
  }

  saveModafinil(modafinil: Modafinil) {
    this.modafinilFacade.saveModafinil(modafinil);
  }

  deleteModafinil(modafinil: Modafinil) {
    this.modafinilFacade.deleteModafinil(modafinil);
  }

  resetModafinil() {
    this.form.reset();
    this.selectModafinil(emptyModa)
  }

  cancel() {
    this.resetModafinil();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      tradeName: [''],
      genericName: [''],
      dosage: [''],
    })
  }
}

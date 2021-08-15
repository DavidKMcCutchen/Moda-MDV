import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Modafinil } from "@modafinil/api-interfaces";

@Component({
  selector: 'modafinil-modafinil-details',
  templateUrl: './modafinil-details.component.html',
  styleUrls: ['./modafinil-details.component.scss']
})
export class ModafinilDetailsComponent {
  currentModafinil: Modafinil;
  originalTitle: string;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  c@Input() set modafinil(value) {
    if (value) this.originalTitle = value.tradeName;
    this.currentModafinil = { ...value }
  }
  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }

  cancel() {
    this.cancelled.emit();
  }
}

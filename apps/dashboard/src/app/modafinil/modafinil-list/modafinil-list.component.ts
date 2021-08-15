import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Modafinil } from '@modafinil/api-interfaces';

@Component({
  selector: 'modafinil-modafinil-list',
  templateUrl: './modafinil-list.component.html',
  styleUrls: ['./modafinil-list.component.scss']
})
export class ModafinilListComponent {
  @Input() modafinils: Modafinil[] |  null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}

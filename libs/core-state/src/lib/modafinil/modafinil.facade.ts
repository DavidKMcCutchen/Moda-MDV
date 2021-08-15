import { Injectable } from '@angular/core';
import { Modafinil } from '@modafinil/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as ModafinilActions from './modafinil.actions';
import * as fromModafinil from './modafinil.reducer';
import * as ModafinilSelectors from './modafinil.selectors';

@Injectable({
  providedIn: 'root',
})
export class ModafinilFacade {
  allModafinils$ = this.store.pipe(select(ModafinilSelectors.getAllModafinils));
  selectedModafinil$ = this.store.pipe(select(ModafinilSelectors.getSelectedModafinil));
  loaded$ = this.store.pipe(select(ModafinilSelectors.getModafinilsLoaded));

  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
      action.type === ModafinilActions.createModafinil({} as any).type ||
      action.type === ModafinilActions.deleteModafinil({} as any).type ||
      action.type === ModafinilActions.updateModafinil({} as any).type
    )
  );

  selectModafinil(modafinilId: string) {
    this.dispatch(ModafinilActions.selectModafinil({ modafinilId }));
  }

  loadModafinils() {
    this.dispatch(ModafinilActions.loadModafinils());
  }

  loadModafinil(modafinilId: string) {
    this.dispatch(ModafinilActions.loadModafinil({ modafinilId }));
  }

  saveModafinil(modafinil: Modafinil) {
    modafinil.id ? this.updateModafinil(modafinil) : this.createModafinil(modafinil);
  }

  createModafinil(modafinil: Modafinil) {
    this.dispatch(ModafinilActions.createModafinil({ modafinil }));
  }

  updateModafinil(modafinil: Modafinil) {
    this.dispatch(ModafinilActions.updateModafinil({ modafinil }));
  }

  deleteModafinil(modafinil: Modafinil) {
    this.dispatch(ModafinilActions.deleteModafinil({ modafinil }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  constructor(
    private store: Store<fromModafinil.ModafinilPartialState>,
    private actions$: ActionsSubject
  ) {}
}
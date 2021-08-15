import { Modafinil } from "@modafinil/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as ModafinilActions from './modafinil.actions';

export const MODAFINIL_FEATURE_KEY = 'modafinils';

export interface ModafinilState extends EntityState<Modafinil> {
  selectedId?: string | number; // which Modafinil record has been selected
  loaded: boolean; // has the Modafinils list been loaded
  error?: string | null; // last known error (if any)
}

export interface ModafinilPartialState {
  readonly [MODAFINIL_FEATURE_KEY]: ModafinilState;
}

export const modafinilAdapter: EntityAdapter<Modafinil> = createEntityAdapter<Modafinil>();

export const initialModafinilState: ModafinilState = modafinilAdapter.getInitialState(
  {
    loaded: false,
  }
);

const onFailure = (state, { error }): ModafinilState => ({ ...state, error });

const onDispatch = (state, action): ModafinilState => ({
  ...state,
  loaded: false,
  error: null,
});

const _modafinilsReducer = createReducer(
  initialModafinilState,
  on(
    ModafinilActions.loadModafinilFailure,
    ModafinilActions.loadModafinilsFailure,
    ModafinilActions.deleteModafinilFailure,
    ModafinilActions.updateModafinilFailure,
    ModafinilActions.createModafinilFailure,
    onFailure
  ),
  on(
    ModafinilActions.loadModafinil,
    ModafinilActions.loadModafinils,
    ModafinilActions.deleteModafinil,
    ModafinilActions.updateModafinil,
    ModafinilActions.createModafinil,
    onDispatch
  ),
  on(
    ModafinilActions.loadModafinilSuccess, (state, { modafinil }) =>
    modafinilAdapter.upsertOne(modafinil, { ...state, loaded: true })
  ),
  on(ModafinilActions.selectModafinil, (state, { modafinilId }) => ({
    ...state,
    selectedId: modafinilId,
  })),
  on(ModafinilActions.loadModafinilsSuccess, (state, { modafinils }) =>
    modafinilAdapter.setAll(modafinils, { ...state, loaded: true })
  ),
  on(ModafinilActions.deleteModafinilSuccess, (state, { modafinil }) =>
    modafinilAdapter.removeOne(modafinil.id, { ...state, loaded: true })
  ),
  on(ModafinilActions.updateModafinilSuccess, (state, { modafinil }) =>
    modafinilAdapter.updateOne(
      { id: modafinil.id, changes: modafinil },
      { ...state, loaded: true }
    )
  ),
  on(ModafinilActions.createModafinilSuccess, (state, { modafinil }) =>
    modafinilAdapter.addOne(modafinil, { ...state, loaded: true })
  )
);

export function modafinilsReducer(
  state: ModafinilState | undefined,
  action: Action
) {
  return _modafinilsReducer(state, action);
}
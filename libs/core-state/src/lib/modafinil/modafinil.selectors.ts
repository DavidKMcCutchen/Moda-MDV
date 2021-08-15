import { emptyModa } from "@modafinil/api-interfaces";
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { modafinilAdapter, ModafinilState, MODAFINIL_FEATURE_KEY } from "./modafinil.reducer";

// Lookup the 'Modafini' feature state managed by NgRx
export const getModafinilState = createFeatureSelector<ModafinilState>(MODAFINIL_FEATURE_KEY);

const { selectAll, selectEntities } = modafinilAdapter.getSelectors();


export const getModafinilsLoaded = createSelector(
  getModafinilState,
  (state: ModafinilState) => state.loaded
)

export const getModafinilError = createSelector(
  getModafinilState,
  (state: ModafinilState) => state.error
)

export const getAllModafinils = createSelector(
  getModafinilState,
  (state: ModafinilState) => selectAll(state)
)
 
export const getModafinilEntities = createSelector(
  getModafinilState,
  (state: ModafinilState) => selectEntities(state)
)

export const getSelectedModafinilId = createSelector(
  getModafinilState,
  (state: ModafinilState) => state.selectedId
)

export const getSelectedModafinil = createSelector(
  getModafinilEntities,
  getSelectedModafinilId,
  (entities, selectedId) => (selectedId && entities[selectedId]) || emptyModa
)
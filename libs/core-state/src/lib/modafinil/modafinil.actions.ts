import { Modafinil } from "@modafinil/api-interfaces";
import { createAction, props } from "@ngrx/store";

// Select Entity
export const selectModafinil = createAction(
  '[MODAFINIL] Select Modafinil',
  props<{ modafinilId: string }>()
);

// Load All Entities
export const loadModafinils = createAction('[MODAFINIL] Load Modafinils');

export const loadModafinilsSuccess = createAction(
  '[MODAFINIL] Load Modafinils Success',
  props<{ modafinils: Modafinil[] }>()
);

export const loadModafinilsFailure = createAction(
  '[MODAFINIL] Load Modafinils Failure',
  props<{ error: any }>()
);

// Load Single Entity
export const loadModafinil = createAction(
  '[MODAFINIL] Load Modafinil',
  props<{ modafinilId: string }>()
);

export const loadModafinilSuccess = createAction(
  '[MODAFINIL] Load Modafinil Success',
  props<{ modafinil: Modafinil }>()
);

export const loadModafinilFailure = createAction(
  '[MODAFINIL] Load Modafinil Failure',
  props<{ error: any }>()
);

// Load Update Entity
export const updateModafinil = createAction(
  '[MODAFINIL] Create Modafinil',
  props<{ modafinil: Modafinil }>()
);
export const updateModafinilSuccess = createAction(
  '[MODAFINIL] Create Modafinil Success',
  props<{ modafinil: Modafinil }>()
);
export const updateModafinilFailure = createAction(
  '[MODAFINIL] Create Modafinil Failure',
  props<{ error: any }>()
);

// Load Delete Entity
export const deleteModafinil = createAction(
  '[MODAFINIL] Delete Modafinil',
  props<{ modafinil: Modafinil }>()
);
export const deleteModafinilSuccess = createAction(
  '[MODAFINIL] Delete Modafinil Success',
  props<{ modafinil: Modafinil }>()
);
export const deleteModafinilFailure = createAction(
  '[MODAFINIL] Delete Modafinil Failure',
  props<{ error: any }>()
);

// Load Create Entity
export const createModafinil = createAction(
  '[MODAFINIL] Update Modafinil',
  props<{ modafinil: Modafinil }>()
);
export const createModafinilSuccess = createAction(
  '[MODAFINIL] Update Modafinil Success',
  props<{ modafinil: Modafinil }>()
);
export const createModafinilFailure = createAction(
  '[MODAFINIL] Update Modafinil Failure',
  props<{ error: any }>()
);
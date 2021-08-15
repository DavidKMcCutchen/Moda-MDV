import { ActionReducerMap } from "@ngrx/store";
import * as fromModafinil from './modafinil/modafinil.reducer';

export interface AppState {
  [fromModafinil.MODAFINIL_FEATURE_KEY]: fromModafinil.ModafinilState
} 

export const reducers: ActionReducerMap<AppState> = {
  [fromModafinil.MODAFINIL_FEATURE_KEY]: fromModafinil.modafinilsReducer
};
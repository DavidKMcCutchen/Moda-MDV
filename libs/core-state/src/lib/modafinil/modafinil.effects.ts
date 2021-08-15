import { Injectable } from "@angular/core";
import { ModafinilService } from "@modafinil/core-data";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ModafinilActions from './modafinil.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";
import { Modafinil } from "@modafinil/api-interfaces";

@Injectable()
export class ModafinilEffects {
  loadModafinil$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ModafinilActions.loadModafinil),
      fetch({
        run: (action) =>
          this.modafinilService
            .find(action.modafinilId)
            .pipe(
              map((modafinil: Modafinil) =>
                ModafinilActions.loadModafinilSuccess({ modafinil })
              )
            ),
        onError: (action, error) => ModafinilActions.loadModafinilFailure({ error }),
      })
    )
  );

  loadModafinils$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ModafinilActions.loadModafinils),
      fetch({
        run: () =>
          this.modafinilService
            .all()
            .pipe(
              map((modafinils: Modafinil[]) =>
                ModafinilActions.loadModafinilsSuccess({ modafinils })
              )
            ),
        onError: (action, error) => ModafinilActions.loadModafinilsFailure({ error }),
      })
    )
  );

  updateModafinil$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ModafinilActions.updateModafinil),
      pessimisticUpdate({
        run: (action) =>
          this.modafinilService
            .update(action.modafinil)
            .pipe(
              map((modafinil: Modafinil) =>
                ModafinilActions.updateModafinilSuccess({ modafinil })
              )
            ),
        onError: (action, error) =>
          ModafinilActions.updateModafinilFailure({ error }),
      })
    )
  );

  deleteModafinil$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ModafinilActions.deleteModafinil),
      pessimisticUpdate({
        run: (action) =>
          this.modafinilService
            .delete(action.modafinil)
            .pipe(
              map(() =>
                ModafinilActions.deleteModafinilSuccess({ modafinil: action.modafinil })
              )
            ),
        onError: (action, error) =>
          ModafinilActions.deleteModafinilFailure({ error }),
      })
    )
  );

  createModafinil$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ModafinilActions.createModafinil),
      pessimisticUpdate({
        run: (action) =>
          this.modafinilService
            .create(action.modafinil)
            .pipe(
              map((modafinil: Modafinil) =>
                ModafinilActions.createModafinilSuccess({ modafinil })
              )
            ),
        onError: (action, error) =>
          ModafinilActions.createModafinilFailure({ error }),
      })
    )
  );

  constructor(
    private actions$: Actions,
    private modafinilService: ModafinilService
  ) {}
}
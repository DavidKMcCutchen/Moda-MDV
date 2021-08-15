import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from "@angular/router";
import { ModafinilComponent } from './modafinil/modafinil.component';
import { ModafinilService } from "@modafinil/core-data";
import { LoginComponent } from "@modafinil/ui-login";


const routes: Route[] = [
  {path:'', component: LoginComponent},
  {path: 'modafinil', component: ModafinilComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}

];


@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
})
export class RoutingModule {}

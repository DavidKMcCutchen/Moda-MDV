import { Component } from '@angular/core';


@Component({
  selector: 'modafinil-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Modafinil';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'modafinil', icon: 'view_list', title: 'Modafinil'}
  ]
}

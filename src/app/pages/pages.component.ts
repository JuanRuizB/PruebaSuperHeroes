import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
  <app-header></app-header>
    <router-outlet ></router-outlet>
    <app-footer></app-footer>`,
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {

}

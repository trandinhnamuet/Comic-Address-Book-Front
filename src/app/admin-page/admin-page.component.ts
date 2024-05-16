import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  currentComponent: string = 'account'; // Set giá trị mặc định là 'account'

  constructor() { }

  showComponent(component: string) {
    this.currentComponent = component;
  }
}

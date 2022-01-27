import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-add-address></app-add-address>
    <app-edit-address></app-edit-address>
    <!-- <router-outlet></router-outlet> -->
  `,
  styles: []
})
export class AppComponent {
  title = 'kolokwium-angular';
}

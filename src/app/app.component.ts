import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, PageRouterOutlet } from '@nativescript/angular';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
  imports: [PageRouterOutlet, NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppComponent {
  constructor() { }
}

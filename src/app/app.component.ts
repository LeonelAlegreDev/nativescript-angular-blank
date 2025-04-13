import { Component, NO_ERRORS_SCHEMA, ViewContainerRef, ViewChild } from '@angular/core';
import { NativeScriptCommonModule, PageRouterOutlet } from '@nativescript/angular';
import { NotificationService } from './core/services/notification.service';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
  imports: [PageRouterOutlet, NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppComponent {
  @ViewChild('notificationPopup', { read: ViewContainerRef }) notificationPopupRef: ViewContainerRef;

  constructor(private notificationService: NotificationService) { }

  ngAfterViewInit(): void {
    this.notificationService.setViewContainerRef(this.notificationPopupRef);
  }
}

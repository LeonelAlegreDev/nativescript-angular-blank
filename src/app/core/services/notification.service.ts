import { Injectable, ViewContainerRef } from '@angular/core';
import { NotificationPopupComponent } from '../components/notification-popup/notification-popup.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private popupComponentRef: any;
  private viewContainerRef: ViewContainerRef | null = null;

  constructor() { }

  public setViewContainerRef(vcr: ViewContainerRef): void {
    this.viewContainerRef = vcr;
  }

  public show(message: string): void {
    if (this.viewContainerRef) {
      this.popupComponentRef = this.viewContainerRef.createComponent(NotificationPopupComponent);
      this.popupComponentRef.instance.show(message);
    } else {
      console.log('NotificationService: ViewContainerRef not set.');
    }
  }

  public hide(): void {
    if (this.popupComponentRef) {
      this.popupComponentRef.instance.hide();
    }
  }
}
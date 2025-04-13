import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.css'],
  imports: [CommonModule],
})
export class NotificationPopupComponent implements OnInit {
  public message: string = '';
  public isVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public show(newMessage: string): void {
    this.message = newMessage;
    this.isVisible = true;
  }

  public hide(): void {
    this.isVisible = false;
    this.message = '';
  }
}
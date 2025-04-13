import { Component, NO_ERRORS_SCHEMA, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { Page } from '@nativescript/core';
import { NotificationService } from '~/app/core/services/notification.service';

@Component({
    selector: 'ns-welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.css'],
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptCommonModule,
    ],
})
export class WelcomePageComponent implements OnInit {
    @ViewChild('notificationPopup', { read: ViewContainerRef }) notificationPopupRef: ViewContainerRef;

    constructor(private router: Router, private page: Page, private notificationService: NotificationService) {
        this.page.actionBarHidden = true; // Ocultar la barra de acción
    }

    ngAfterViewInit(): void {
        this.notificationService.setViewContainerRef(this.notificationPopupRef);
    }
    ngOnInit(): void {

    }

    public onCreateAccountTap(): void {
        console.log('Crear Cuenta presionado');
        this.notificationService.show('Se ha presionado el botón Crear Cuenta');
    }

    public onLoginTap(): void {
        console.log('Iniciar Sesión presionado');
        this.notificationService.show('Se ha presionado el botón Iniciar Sesión');
    }

}
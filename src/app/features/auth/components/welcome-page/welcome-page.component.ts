import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { Page } from '@nativescript/core';

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

    constructor(private router: Router, private page: Page) {
        this.page.actionBarHidden = true; // Ocultar la barra de acción
    }

    ngOnInit(): void {

    }

    public onCreateAccountTap(): void {
        console.log('Crear Cuenta presionado');
    }

    public onLoginTap(): void {
        console.log('Iniciar Sesión presionado');
    }

}
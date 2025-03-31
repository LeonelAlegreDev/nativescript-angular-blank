import { Routes } from '@angular/router';

export const routes: Routes = [
    // Update this 👇
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    // Add this 👇
    {
        path: 'home',
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
    }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/mode/mode.component').then(m => m.ModeComponent),

    },
    {
        path: 'suggestion',
        loadChildren: () => import('./pages/suggestion/suggestion.routes').then(m => m.routes),
    },
    {
        path: 'find',
        pathMatch: 'full',
        loadComponent: () => import('./pages/find/find.component').then(m => m.FindComponent),
    },
    {
        path: 'movie',
        loadChildren: () => import('./pages/movie/movie.routes').then(m => m.routes),
    },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./movie.component').then(m => m.MovieComponent),
    }
];

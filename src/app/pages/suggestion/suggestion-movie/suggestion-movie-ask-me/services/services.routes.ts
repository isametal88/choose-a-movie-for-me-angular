import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadComponent: () => import('./services.component').then(m => m.ServicesComponent)
            },
            {
                path: 'genre',
                loadComponent: () => import('./genre/genre.component').then(m => m.GenreComponent)
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];

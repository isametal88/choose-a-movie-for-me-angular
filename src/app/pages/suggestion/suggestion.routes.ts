import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./suggestion.component').then(m => m.SuggestionComponent),
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadComponent: () => import('./suggestion-media/suggestion-media.component').then(m => m.SuggestionMediaComponent),
            },
            {
                path: 'movie',
                //pathMatch: 'full',
                loadChildren: () => import('./suggestion-movie/suggestion-movie.routes').then(m => m.routes),
            },
            /* {
                path: 'tv-show',
                pathMatch: 'full',
                loadChildren: () => import('./suggestion-tv-show/suggestion-tv-show.routes').then(m => m.routes),
            } */
        ]

    }
];

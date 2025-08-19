import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadComponent: () => import('./suggestion-movie-mode/suggestion-movie-mode.component').then(m => m.SuggestionMovieModeComponent),
            },
            {
                path: 'surprise-me',
                loadChildren: () => import('./suggestion-movie-surprise-me/suggestion-movie-surprise-me.routes').then(m => m.routes),
            },
            {
                path: 'ask-me',
                loadChildren: () => import('./suggestion-movie-ask-me/suggestion-movie-ask-me.routes').then(m => m.routes),
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]

    }
];

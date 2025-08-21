import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./suggestion-movie-ask-me.component').then(m => m.SuggestionMovieAskMeComponent),
    }
];

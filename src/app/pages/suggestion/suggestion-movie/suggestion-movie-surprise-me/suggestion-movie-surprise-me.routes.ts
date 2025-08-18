import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./suggestion-movie-surprise-me.component').then(m => m.SuggestionMovieSurpriseMeComponent),
        children: []
    }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'services',
                loadChildren: () => import('./services/services.routes').then(m => m.routes)
            },
            {
                path: '**',
                redirectTo: 'services'
            }
        ]
    }
];

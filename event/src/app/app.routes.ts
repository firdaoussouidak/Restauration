import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'Restauration',
        loadComponent: () => import('./restauration/restauration.component').then(m => m.RestaurationComponent)
    },
    {
        path: 'chatbot',
        loadComponent: () => import('./chatbot/chatbot.component').then(m => m.ChatbotComponent)
    }
];

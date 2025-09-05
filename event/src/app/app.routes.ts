import { Routes } from '@angular/router';
import { TransportComponent } from './Transport/transport.component'; 

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
        path: 'Restaurationdetail',
        loadComponent: () => import('./restauration-detail/restauration-detail.component').then(m => m.RestaurationDetailComponent)
    },
    {
        path: 'chef-equip',
        loadComponent: () => import('./chef-equip/chef-equip.component').then(m => m.ChefEquipComponent)
    },
    {
        path: 'chef-equip-detail',
        loadComponent: () => import('./chef-equip-detail/chef-equip-detail.component').then(m => m.ChefEquipDetailComponent)
    },
    { path: 'Transport', component: TransportComponent },

    {
        path: 'chatbot',
        loadComponent: () => import('./chatbot/chatbot.component').then(m => m.ChatbotComponent)
    }
];

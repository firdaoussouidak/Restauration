import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'chef-equip',
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
        path: 'chef-equip',
        loadComponent: () => import('./chef-equip/chef-equip.component').then(m => m.ChefEquipComponent)
    },
    {
        path: 'chef-equip-detail',
        loadComponent: () => import('./chef-equip-detail/chef-equip-detail.component').then(m => m.ChefEquipDetailComponent)
    },
    {
        path: 'chatbot',
        loadComponent: () => import('./chatbot/chatbot.component').then(m => m.ChatbotComponent)
    }
];

import { Routes } from '@angular/router';
import { TransportComponent } from './Transport/transport.component'; 

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
    { path: 'Transport', component: TransportComponent },

    {
        path: 'chatbot',
        loadComponent: () => import('./chatbot/chatbot.component').then(m => m.ChatbotComponent)
    },
    {
  path: 'events',
  loadComponent: () => import('./events/index/index.component').then(m => m.IndexComponent)
},
{
  path: 'events/details',
  loadComponent: () => import('./events/details/details.component').then(m => m.DetailsComponent)
},
{
  path: 'events/more',
  loadComponent: () => import('./events/more/more.component').then(m => m.MoreComponent)
},
{
  path: 'events/reservation',
  loadComponent: () => import('./events/reservation/reservation.component').then(m => m.ReservationComponent)
},
];

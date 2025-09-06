import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './details/details.component';
import { MoreComponent } from './more/more.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  { path: '', component: IndexComponent },       // /events → Index
  { path: 'details', component: DetailsComponent },
  { path: 'more', component: MoreComponent },
  { path: 'reservation', component: ReservationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }

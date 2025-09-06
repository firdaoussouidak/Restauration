import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './details/details.component';
import { MoreComponent } from './more/more.component';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [
    IndexComponent,
    DetailsComponent,
    MoreComponent,
    ReservationComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }

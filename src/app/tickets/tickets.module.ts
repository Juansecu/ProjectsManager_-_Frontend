import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';

import { TicketCardsComponent } from './components/ticket-cards/ticket-cards.component';

@NgModule({
  declarations: [TicketCardsComponent],
  imports: [CommonModule, TicketsRoutingModule]
})
export class TicketsModule {}

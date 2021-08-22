import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketCardsComponent } from './components/ticket-cards/ticket-cards.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'my-tickets',
        component: TicketCardsComponent
      },
      {
        path: '**',
        redirectTo: 'my-tickets'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule {}

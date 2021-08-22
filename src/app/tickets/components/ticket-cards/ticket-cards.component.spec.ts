import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCardsComponent } from './ticket-cards.component';

describe('TicketCardsComponent', () => {
  let component: TicketCardsComponent;
  let fixture: ComponentFixture<TicketCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

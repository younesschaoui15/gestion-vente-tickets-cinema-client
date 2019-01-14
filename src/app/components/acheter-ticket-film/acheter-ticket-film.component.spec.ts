import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheterTicketFilmComponent } from './acheter-ticket-film.component';

describe('AcheterTicketFilmComponent', () => {
  let component: AcheterTicketFilmComponent;
  let fixture: ComponentFixture<AcheterTicketFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcheterTicketFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcheterTicketFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

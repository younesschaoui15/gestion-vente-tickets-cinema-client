import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAffcihesComponent } from './liste-affcihes.component';

describe('ListeAffcihesComponent', () => {
  let component: ListeAffcihesComponent;
  let fixture: ComponentFixture<ListeAffcihesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAffcihesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAffcihesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

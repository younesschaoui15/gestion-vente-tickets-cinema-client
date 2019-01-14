import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFilmsAdminComponent } from './liste-films-admin.component';

describe('ListeFilmsAdminComponent', () => {
  let component: ListeFilmsAdminComponent;
  let fixture: ComponentFixture<ListeFilmsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFilmsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFilmsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

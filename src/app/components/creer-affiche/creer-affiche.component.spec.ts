import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerAfficheComponent } from './creer-affiche.component';

describe('CreerAfficheComponent', () => {
  let component: CreerAfficheComponent;
  let fixture: ComponentFixture<CreerAfficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerAfficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

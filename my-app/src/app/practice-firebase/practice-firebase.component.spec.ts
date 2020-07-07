import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeFirebaseComponent } from './practice-firebase.component';

describe('PracticeFirebaseComponent', () => {
  let component: PracticeFirebaseComponent;
  let fixture: ComponentFixture<PracticeFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

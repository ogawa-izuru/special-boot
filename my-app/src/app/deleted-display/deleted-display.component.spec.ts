import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedDisplayComponent } from './deleted-display.component';

describe('DeletedDisplayComponent', () => {
  let component: DeletedDisplayComponent;
  let fixture: ComponentFixture<DeletedDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

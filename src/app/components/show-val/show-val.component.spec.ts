import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowValComponent } from './show-val.component';

describe('ShowValComponent', () => {
  let component: ShowValComponent;
  let fixture: ComponentFixture<ShowValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowValComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

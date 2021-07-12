import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvansComponent } from './evans.component';

describe('EvansComponent', () => {
  let component: EvansComponent;
  let fixture: ComponentFixture<EvansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

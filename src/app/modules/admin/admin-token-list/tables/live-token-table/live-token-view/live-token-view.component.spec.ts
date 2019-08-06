import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTokenViewComponent } from './live-token-view.component';

describe('LiveTokenViewComponent', () => {
  let component: LiveTokenViewComponent;
  let fixture: ComponentFixture<LiveTokenViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTokenViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTokenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

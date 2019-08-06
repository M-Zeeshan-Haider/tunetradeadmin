import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycVfyTableComponent } from './kyc-vfy-table.component';

describe('KycVfyTableComponent', () => {
  let component: KycVfyTableComponent;
  let fixture: ComponentFixture<KycVfyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycVfyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycVfyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

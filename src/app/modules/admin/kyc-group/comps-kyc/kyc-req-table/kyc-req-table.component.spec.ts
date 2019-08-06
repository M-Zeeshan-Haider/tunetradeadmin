import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycReqTableComponent } from './kyc-req-table.component';

describe('KycReqTableComponent', () => {
  let component: KycReqTableComponent;
  let fixture: ComponentFixture<KycReqTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycReqTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycReqTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

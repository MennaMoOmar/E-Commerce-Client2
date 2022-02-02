import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterLayoutScreen } from './master-layout.screen';

describe('MasterLayoutScreen', () => {
  let component: MasterLayoutScreen;
  let fixture: ComponentFixture<MasterLayoutScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterLayoutScreen],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterLayoutScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

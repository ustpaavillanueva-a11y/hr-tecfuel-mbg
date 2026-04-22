import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyUpdates } from './company-updates';

describe('CompanyUpdates', () => {
  let component: CompanyUpdates;
  let fixture: ComponentFixture<CompanyUpdates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyUpdates],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyUpdates);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

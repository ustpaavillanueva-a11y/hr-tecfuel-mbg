import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadForm } from './download-form';

describe('DownloadForm', () => {
  let component: DownloadForm;
  let fixture: ComponentFixture<DownloadForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadForm],
    }).compileComponents();

    fixture = TestBed.createComponent(DownloadForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

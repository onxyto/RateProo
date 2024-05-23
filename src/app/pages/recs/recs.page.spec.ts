import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecsPage } from './recs.page';

describe('RecsPage', () => {
  let component: RecsPage;
  let fixture: ComponentFixture<RecsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

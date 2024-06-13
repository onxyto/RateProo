import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UseInfoPage } from './use-info.page';

describe('UseInfoPage', () => {
  let component: UseInfoPage;
  let fixture: ComponentFixture<UseInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UseInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanPage } from './scan.page';
import { IonIcon } from '@ionic/angular/standalone';
describe('ScanPage', () => {
  let component: ScanPage;
  let fixture: ComponentFixture<ScanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

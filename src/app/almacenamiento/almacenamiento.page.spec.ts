import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlmacenamientoPage } from './almacenamiento.page';

describe('AlmacenamientoPage', () => {
  let component: AlmacenamientoPage;
  let fixture: ComponentFixture<AlmacenamientoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlmacenamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

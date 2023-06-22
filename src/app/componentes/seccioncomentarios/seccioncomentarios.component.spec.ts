import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccioncomentariosComponent } from './seccioncomentarios.component';

describe('SeccioncomentariosComponent', () => {
  let component: SeccioncomentariosComponent;
  let fixture: ComponentFixture<SeccioncomentariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccioncomentariosComponent]
    });
    fixture = TestBed.createComponent(SeccioncomentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

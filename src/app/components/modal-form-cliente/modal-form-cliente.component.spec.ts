import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormClienteComponent } from './modal-form-cliente.component';

describe('ModalFormClienteComponent', () => {
  let component: ModalFormClienteComponent;
  let fixture: ComponentFixture<ModalFormClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFormClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFormClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

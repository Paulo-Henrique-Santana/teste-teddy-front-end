import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteClientComponent } from './modal-delete-client.component';

describe('ModalDeleteClientComponent', () => {
  let component: ModalDeleteClientComponent;
  let fixture: ComponentFixture<ModalDeleteClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDeleteClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDeleteClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

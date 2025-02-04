import { Component, EventEmitter, inject, Input, Output, WritableSignal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-form-cliente',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-form-cliente.component.html',
  styleUrl: './modal-form-cliente.component.scss'
})
export class ModalFormClienteComponent {
  @Input({ required: true }) openModal!: WritableSignal<boolean>;
  
  @Output('add') addClientEvent = new EventEmitter();

  fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', Validators.required],
    salary: [null, Validators.required],
    companyValue: [null, Validators.required],
  });

  closeModal() {
    this.openModal.set(false);  
  }

  onSubmitForm() {
    this.addClientEvent.emit(this.form.value);
    this.closeModal();
    this.form.reset();
  }
}

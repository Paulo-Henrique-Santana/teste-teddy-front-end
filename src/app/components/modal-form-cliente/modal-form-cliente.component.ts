import {
  Component,
  effect,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
  WritableSignal,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Client } from '../../models/client';

@Component({
  selector: 'app-modal-form-cliente',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-form-cliente.component.html',
  styleUrl: './modal-form-cliente.component.scss',
})
export class ModalFormClienteComponent {
  @Input() clientToEdit: WritableSignal<Client | null> = signal(null);
  @Input({ required: true }) openModal!: WritableSignal<boolean>;

  @Output('add') addClientEvent = new EventEmitter();
  @Output('edit') editClientEvent = new EventEmitter<Client>();

  title = '';

  fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', Validators.required],
    salary: new FormControl<null | number>(null, Validators.required),
    companyValue: new FormControl<null | number>(null, Validators.required),
  });

  constructor() {
    effect(() => {
      const clientToEdit = this.clientToEdit();

      if (this.openModal()) {
        if (clientToEdit) {
          this.title = 'Editar cliente';
          this.form.patchValue(clientToEdit);
        } else {
          this.title = 'Criar cliente';
        }
      }
    });
  }

  closeModal() {
    this.openModal.set(false);
    this.clientToEdit.set(null);
    this.form.reset();
  }

  onSubmitForm() {
    const clientToEdit = this.clientToEdit();

    if (clientToEdit) {
      const editedClient: any = { ...clientToEdit, ...this.form.value };
      this.editClientEvent.emit(editedClient);
    } else {
      this.addClientEvent.emit(this.form.value);
    }

    this.closeModal();
  }
}

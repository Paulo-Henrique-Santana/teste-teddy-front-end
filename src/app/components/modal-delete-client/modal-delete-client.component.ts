import {
  Component,
  EventEmitter,
  Input,
  Output,
  WritableSignal,
} from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-modal-delete-client',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './modal-delete-client.component.html',
  styleUrl: './modal-delete-client.component.scss',
})
export class ModalDeleteClientComponent {
  @Input({ required: true }) client!: WritableSignal<{
    id: number;
    name: string;
  } | null>;

  @Output('confirm') confirmEvent = new EventEmitter<number>();

  closeModal() {
    this.client.set(null);
  }

  onSubmit() {
    this.confirmEvent.emit(this.client()!.id);
    this.client.set(null);
  }
}

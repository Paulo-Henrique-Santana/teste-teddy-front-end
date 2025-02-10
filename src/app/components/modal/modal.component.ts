import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input({ required: true }) title!: string;

  @Output('close') eventClose = new EventEmitter();

  closeModal() {
    this.eventClose.emit();
  }
}

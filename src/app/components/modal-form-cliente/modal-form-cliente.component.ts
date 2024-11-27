import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-form-cliente',
  standalone: true,
  imports: [],
  templateUrl: './modal-form-cliente.component.html',
  styleUrl: './modal-form-cliente.component.scss'
})
export class ModalFormClienteComponent {
  modalAberto = true;

  fecharModal() {
    this.modalAberto = false;
  }
}

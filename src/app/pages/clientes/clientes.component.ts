import { Component } from '@angular/core';
import { ModalFormClienteComponent } from '../../components/modal-form-cliente/modal-form-cliente.component';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [ModalFormClienteComponent],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent {
  items = new Array(16);
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent {
  items = new Array(16);
}

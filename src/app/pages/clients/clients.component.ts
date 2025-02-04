import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardClientComponent } from '../../components/card-client/card-client.component';
import { ModalFormClienteComponent } from '../../components/modal-form-cliente/modal-form-cliente.component';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [ModalFormClienteComponent, FormsModule, CardClientComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent implements OnInit {
  clientService = inject(ClientService);

  clients: Client[] = [];

  page = 1;
  pageSize = 16;

  openModalAddClient = signal(false);

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    const params = { page: this.page, pageSize: this.pageSize };

    this.clientService.getAll(params).subscribe({
      next: (res) => {
        this.clients = res.items;
      },
    });
  }

  onAddClient($event: Client) {
    this.clientService.create($event).subscribe({
      next: (res) => {
        this.clients.unshift(res);
      },
    });
  }

  onClickAddClient() {
    this.openModalAddClient.set(true);
  }
}

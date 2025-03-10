import { Component, inject, OnInit } from '@angular/core';
import { CardClientComponent } from '../../components/card-client/card-client.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { CardClientAction } from '../../models/card-client';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-selected-clients',
  standalone: true,
  imports: [PaginationComponent, CardClientComponent],
  templateUrl: './selected-clients.component.html',
  styleUrl: './selected-clients.component.scss',
})
export class SelectedClientsComponent implements OnInit {
  private clientService = inject(ClientService);

  page = 1;
  pageSize = 16;
  totalPages = 0;

  clients: Client[] = [];

  actionsClientCard: CardClientAction[] = ['select'];

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    const params = { page: this.page, pageSize: this.pageSize, selected: true };

    this.clientService.getAll(params).subscribe({
      next: (res) => {
        this.clients = res.items;
        this.totalPages = Math.ceil(res.total / this.pageSize);
      },
    });
  }

  unselectClients() {
    this.clientService.unselectAll().subscribe({
      next: () => {
        this.clients = [];
        this.totalPages = 0;
      },
    });
  }

  onChangePage($event: number) {
    this.page = $event;
    this.getClients();
  }

  unselectClient(idClient: number) {
    this.clientService.update({ selected: true }, idClient).subscribe({
      next: () => {
        this.clients = this.clients.filter(client => client.id !== idClient);
      }
    })
  }
}

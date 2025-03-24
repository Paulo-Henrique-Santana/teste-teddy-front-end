import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardClientComponent } from '../../components/card-client/card-client.component';
import { ModalDeleteClientComponent } from '../../components/modal-delete-client/modal-delete-client.component';
import { ModalFormClientComponent } from '../../components/modal-form-client/modal-form-client.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { CardClientAction } from '../../models/card-client';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    ModalFormClientComponent,
    FormsModule,
    CardClientComponent,
    ModalDeleteClientComponent,
    PaginationComponent
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent implements OnInit {
  clientService = inject(ClientService);

  clients: Client[] = [];

  page = 1;
  pageSize = 16;
  totalPages = 0;
  totalClients = 0;

  openModalFormClient = signal(false);
  
  clientToEdit: WritableSignal<Client | null> = signal(null);
  clientToDelete: WritableSignal<{ id: number; name: string } | null> = signal(null);

  actionsClientCard: CardClientAction[] = ['delete', 'edit', 'select'];

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    const params = { page: this.page, pageSize: this.pageSize };

    this.clientService.getAll(params).subscribe({
      next: (res) => {
        this.clients = res.items;
        this.totalPages = Math.ceil(res.total / this.pageSize);
        this.totalClients = res.total;
      },
    });
  }

  onAddClient($event: Client) {
    this.clientService.create($event).subscribe({
      next: (res) => {
        if (this.clients.length === this.pageSize) {
          this.clients.pop();
        }
        this.clients.unshift(res);
        this.totalClients++;
      },
    });
  }

  onEditClient($event: Client) {
    this.clientService.update($event, $event.id).subscribe({
      next: () => {
        this.clients.forEach((client) => {
          if (client.id === $event.id) {
            Object.assign(client, $event);
          }
        });
      },
    });
  }

  onClickAddClient() {
    this.openModalFormClient.set(true);
  }

  onClickEdit(client: Client) {
    this.clientToEdit.set(client);
    this.openModalFormClient.set(true);
  }

  onClickDelete(client: Client) {
    this.clientToDelete.set(client);
  }

  onConfirmDelete(id: number) {
    this.clientService.delete(id).subscribe({
      next: () => {
        this.clients = this.clients.filter((client) => 
          client.id !== id
        )
        this.totalClients--;
      },
    });
  }

  onChangePage($event: number) {
    this.page = $event;
    this.getClients();
  }

  editSelectedClient(id: number, selected: boolean) {
    this.clientService.update({ selected }, id).subscribe({
      next: () => {
        this.clients.forEach((client) => {
          if (client.id === id) {
            client.selected = selected;
          }
        });
      }
    });
  }
}

import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { CardClientComponent } from '../../components/card-client/card-client.component';
import { ModalFormClienteComponent } from '../../components/modal-form-cliente/modal-form-cliente.component';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [ModalFormClienteComponent, AsyncPipe, FormsModule, CardClientComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent implements OnInit {
  clientService = inject(ClientService);

  clients$!: Observable<Client[]>;

  page = 1;
  pageSize = 16;

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    const params = { page: this.page, pageSize: this.pageSize };

    this.clients$ = this.clientService.getAll(params).pipe(map((res) => res.items));
  }
}

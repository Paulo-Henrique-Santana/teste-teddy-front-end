import { Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { SelectedClientsComponent } from './pages/selected-clients/selected-clients.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'clientes', component: ClientsComponent },
      { path: 'clientes-selecionados', component: SelectedClientsComponent },
    ],
  },
  { path: '', component: HomeComponent },
];

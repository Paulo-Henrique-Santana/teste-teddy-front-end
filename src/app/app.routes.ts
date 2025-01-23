import { Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'clientes', component: ClientsComponent },
    ],
  },
  { path: '', component: HomeComponent },
];

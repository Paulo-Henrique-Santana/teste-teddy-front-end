import { Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clientes', component: ClientesComponent }
];

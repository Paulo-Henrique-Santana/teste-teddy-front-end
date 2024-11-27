import { Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'clientes', component: ClientesComponent },
    ],
  },
  { path: '', component: HomeComponent },
];

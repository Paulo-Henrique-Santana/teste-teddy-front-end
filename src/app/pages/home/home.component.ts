import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);

  onSubmit(form: NgForm) {
    sessionStorage.setItem('user', form.value.nome);
    this.router.navigate(['/main/clientes'], { relativeTo: this.route });
  }
}

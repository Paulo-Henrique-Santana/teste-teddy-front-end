import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-client',
  standalone: true,
  imports: [],
  templateUrl: './card-client.component.html',
  styleUrl: './card-client.component.scss'
})
export class CardClientComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) salary!: number;
  @Input({ required: true }) companyValue!: number;

  @Output('clickEdit') edit = new EventEmitter();
}

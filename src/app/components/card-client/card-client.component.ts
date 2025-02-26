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
  @Input({ required: true }) selected!: boolean;

  @Output('edit') editEvent = new EventEmitter();
  @Output('delete') deleteEvent = new EventEmitter();
  @Output('select') selectEvent = new EventEmitter();
  @Output('unselect') unselectEvent = new EventEmitter();
}
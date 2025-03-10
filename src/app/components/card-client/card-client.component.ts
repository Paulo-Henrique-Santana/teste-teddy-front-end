import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import {
  CardClientAction,
  CardClientActionButton,
} from '../../models/card-client';

@Component({
  selector: 'app-card-client',
  standalone: true,
  imports: [],
  templateUrl: './card-client.component.html',
  styleUrl: './card-client.component.scss',
})
export class CardClientComponent implements OnChanges {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) salary!: number;
  @Input({ required: true }) companyValue!: number;
  @Input({ required: true }) selected!: boolean;
  @Input({ required: true }) actions!: CardClientAction[];

  @Output('edit') editEvent = new EventEmitter();
  @Output('delete') deleteEvent = new EventEmitter();
  @Output('select') selectEvent = new EventEmitter();
  @Output('unselect') unselectEvent = new EventEmitter();

  actionsButtons: { [key: string]: CardClientActionButton } = {
    select: {
      eventEmitter: this.selectEvent,
      srcImg: '/imgs/adicionar.png',
      alt: 'Selecionar Cliente',
    },
    unselect: {
      eventEmitter: this.unselectEvent,
      srcImg: '/imgs/remover.png',
      alt: 'Desselecionar Cliente',
    },
    edit: {
      eventEmitter: this.editEvent,
      srcImg: '/imgs/editar.png',
      alt: 'Editar Cliente',
    },
    delete: {
      eventEmitter: this.deleteEvent,
      srcImg: '/imgs/deletar.png',
      alt: 'Deletar Cliente',
    },
  };

  currentActionsButtons: CardClientActionButton[] = [];

  ngOnChanges() {
    this.setActionsButtons();
  }

  setActionsButtons() {
    this.currentActionsButtons = this.actions.map((action) => {
      if (action === 'select')
        return this.selected
          ? this.actionsButtons['unselect']
          : this.actionsButtons['select'];

      return this.actionsButtons[action];
    });
  }
}

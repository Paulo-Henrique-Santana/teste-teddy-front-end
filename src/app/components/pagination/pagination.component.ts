import { NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnChanges {
  @Input({ required: true }) totalPages!: number;

  @Output('change') changeEvent = new EventEmitter<number>();

  selectedNumberPage = 1;

  buttons: (number | null)[] = [];

  ngOnChanges(): void {
    this.generatePagination();
  }

  generatePagination() {
    if (this.buttons.length) return;

    if (this.totalPages <= 6) {
      this.buttons = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      return;
    }

    if (this.selectedNumberPage <= 3) {
      this.buttons = [
        ...Array.from({ length: 4 }, (_, i) => i + 1),
        null,
        this.totalPages,
      ];
      return;
    }

    if (this.selectedNumberPage >= this.totalPages - 2) {
      this.buttons = [
        1,
        null,
        ...Array.from({ length: 4 }, (_, i) => this.totalPages - (3 - i)),
      ];
      return;
    }

    this.buttons = [
      1,
      null,
      this.selectedNumberPage - 1,
      this.selectedNumberPage,
      this.selectedNumberPage + 1,
      null,
      this.totalPages,
    ];
  }

  onClick(page: number | null) {
    if (page) {
      this.selectedNumberPage = page;
      this.changeEvent.emit(page);
      this.generatePagination();
    }
  }
}

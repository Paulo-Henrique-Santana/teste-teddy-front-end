import { EventEmitter } from "@angular/core";

export interface CardClientActionButton {
  eventEmitter: EventEmitter<any>;
  srcImg: string;
  alt: string;
}

export type CardClientAction = 'select' | 'edit' | 'delete';
import { EventEmitter } from '@angular/core';

export class NameService {
  nameChange = new EventEmitter<string>();

  private name: string;

  constructor(initialName: string) {
    this.name = initialName;
  }

  setName(name: string): void {
    this.name = name;
    this.nameChange.emit(this.name);
  }
}

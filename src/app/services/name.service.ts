import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  nameChange = new EventEmitter<string>();

  setName(name: string): void {
    this.nameChange.emit(name);
  }
}

import { EventEmitter, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  headingChange = new EventEmitter<string>();

  constructor(private title: Title) {}

  changeHeader(heading: string) {
    const newTitle = `${environment.appName} | ${heading}`;

    this.title.setTitle(newTitle);
    this.headingChange.emit(heading);
  }  
}

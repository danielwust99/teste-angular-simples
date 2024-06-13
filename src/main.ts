import { bootstrapApplication } from '@angular/platform-browser';
import { Component, EventEmitter, OnInit } from '@angular/core';

import 'zone.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Count {{teste | async}}!</h1>
  `,
})
export class App implements OnInit {
  name = 'Angular';

  teste = new EventEmitter<any>();

  ngOnInit(): void {
    this.updateValue(1);
  }

  updateValue(value: number) {
    this.teste.emit(value + 1);
    setTimeout(() => this.updateValue(value + 1), 1000);
  }
}

bootstrapApplication(App);

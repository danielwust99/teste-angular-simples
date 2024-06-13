import { bootstrapApplication } from '@angular/platform-browser';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'zone.js';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule],
  template: `
    <h1>Count {{value | async}}!</h1>
  `,
})
export class App implements OnInit {
  value = new EventEmitter<any>();

  ngOnInit(): void {
    this.updateValue(1);
  }

  updateValue(value: number) {
    this.value.emit(value + 1);
    setTimeout(() => this.updateValue(value + 1), 1000);
  }
}

bootstrapApplication(App);

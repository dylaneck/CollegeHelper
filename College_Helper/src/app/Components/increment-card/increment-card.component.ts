import { Component } from '@angular/core';

@Component({
  selector: 'app-increment-card',
  templateUrl: './increment-card.component.html',
  styleUrls: ['./increment-card.component.scss'],
})
export class IncrementCardComponent {
  private number = 0;
  constructor() {}

  increment() {
    console.log('clicked!');
  }
}

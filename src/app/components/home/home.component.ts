import { CommonModule } from '@angular/common';
import {
  Component,
  Signal,
  signal,
  WritableSignal,
  computed,
  effect,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  food: WritableSignal<string> = signal<string>('dumpling');
  price: WritableSignal<number> = signal<number>(10);

  total = computed(() => this.price() * 10);

  constructor() {
    effect(() => {
      console.log(this.food());
    });
  }

  onChangeSignal() {
    this.food.set('sandwich');
    this.price.update((pre: number) => pre + 5);
  }
}

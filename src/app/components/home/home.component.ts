import { CommonModule } from '@angular/common';
import {
  Component,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';

interface IItem {
  name: string;
  price: number;
  qty: number;
}

interface ICarts {
  items: Array<IItem>;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  carts: WritableSignal<ICarts> = signal<ICarts>({
    items: [],
  });

  total = computed(() =>
    this.carts().items.reduce(
      (total: number, item: IItem) => total + item.qty * item.price,
      0
    )
  );

  constructor() {
    effect(() => {
      console.log(this.carts());
    });
  }

  addItem() {
    this.carts.update((state: ICarts) => {
      return {
        items: [
          ...state.items,
          {
            name: 'dumpling',
            price: 10,
            qty: 1,
          },
        ],
      };
    });
  }
}

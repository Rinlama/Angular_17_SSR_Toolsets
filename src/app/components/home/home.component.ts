import { CommonModule } from '@angular/common';
import {
  Component,
  Signal,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { map, of, timer } from 'rxjs';

interface IItem {
  name: string;
  qty: number;
  price: number;
}

interface ICart {
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
  cart: WritableSignal<any> = signal<ICart>({
    items: [],
  });

  // total = this.cart().items.reduce(
  //   (total: number, item: IItem) => total + item.qty * item.price,
  //   0
  // );

  total: Signal<number> = computed(() =>
    this.cart().items.reduce(
      (total: number, item: IItem) => total + item.qty * item.price,
      0
    )
  );

  constructor() {
    effect((onCleanup) => {
      console.log(this.cart());
    });
  }

  ngOnInit() {}

  AddCart() {
    this.cart.update((d) => {
      return {
        ...d,
        items: [
          ...d.items,
          {
            name: 'momo',
            qty: 1,
            price: 2,
          },
        ],
      };
    });
  }
}

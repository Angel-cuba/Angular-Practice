import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';
import { Product } from '../model/produc.model';

interface State {
  products: Product[];
}
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api = inject(HttpClient);

  #state = signal<State>({
    products: [],
  });

  public products = computed(() => this.#state().products)

  constructor() {
    this.api
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .pipe(delay(1000))
      .subscribe((res) => {
        console.log(res)
        this.#state.set({
          products: res,
        });
      });
  }
}

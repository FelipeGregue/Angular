import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumeroService {
  gerarNumeros(): Observable<number[]> {
    const numeros: number[] = [];
    for (let i = 1; i <= 100; i++) {
      numeros.push(i);
    }
    return of(numeros);
  }
}

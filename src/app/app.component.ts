import { Component, OnInit } from '@angular/core';
import { NumeroService } from './numero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Números de 1 a 100</h1>
      <ul>
        <li *ngFor="let numero of numeros$ | async">{{ numero }}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  numeros$!: Observable<number[]>; // Adiciona o ponto de exclamação aqui

  constructor(private numeroService: NumeroService) {}

  ngOnInit(): void {
    this.numeros$ = this.numeroService.gerarNumeros();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quero-ajudar',
  templateUrl: './quero-ajudar.component.html',
  styleUrls: ['./quero-ajudar.component.css']
})
export class QueroAjudarComponent implements OnInit {

  public valorArrecadado: number;
  public valorTotal: number = 1000;

  constructor() { }

  ngOnInit() {
  }

  doacao() {
   this.valorTotal = Number(this.valorTotal) + Number(this.valorArrecadado);
    return this.valorTotal;
  }
  
}

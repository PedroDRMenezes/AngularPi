import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-central-ajuda',
  templateUrl: './central-ajuda.component.html',
  styleUrls: ['./central-ajuda.component.css']
})
export class CentralAjudaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private msg: string;
  private msgRetorno: string;

  mensagem(){
    if (this.msg != null) {
      this.msgRetorno = "Mensagem enviada com sucesso! Aguarde nosso retorno!";
    }
  }



}

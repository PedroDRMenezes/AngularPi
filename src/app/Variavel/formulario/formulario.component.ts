import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  private tipo: string;
  private porte: string;
  private local: string;
  private detalhes: string;
  private erroTipo: string;
  private erroPorte: string;
  private erroLocal: string;
  private erroDetalhes: string;
  private cont: number;
  constructor() { }

  ngOnInit() {
  }
  valida(){
    if(this.tipo==null){
      this.erroTipo = "Tipo Inválido";
      this.tipo = null;
      this.cont++;
    }
    else{
      this.erroTipo = null;
    }
    if(this.porte==null){
      this.erroPorte = "Porte Inválido";
      this.porte = null;
      this.cont++;
    }
    else{
      this.erroPorte = null;
    }
    if(this.local==null){
      this.erroLocal = "Local Inválido";
      this.local = null;
      this.cont++;
    }
    else{
      this.erroLocal = null;
    }
    if(this.detalhes==null){
      this.erroDetalhes = "Detalhe Inválido";
      this.detalhes = null;
      this.cont++;
    }
    else{
      this.erroDetalhes = null;
    }
  }
}

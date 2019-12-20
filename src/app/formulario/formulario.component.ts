import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  private nome: string;
  private sobreNome: string;
  private email: string;
  private cidade: string;
  private estado: string;
  private numero: string;
  private texto: string;
  private erroNome: string =null;
  private erroS: string;
  private erroEmail: string;
  private erroCity: string;
  private erroEst: string;
  private erroNum: string;
  private erroMsg: string;
  constructor() { }

  ngOnInit() {
  }

  VeriF() {
    if (this.nome == null) {
      console.log('nome');
      this.erroNome = "Nome Inválido";
    }
    else {
      this.erroNome = null;
    }

    if (this.sobreNome == null) {
      this.erroS = "Sobrenome Inválido";

      console.log('sobrenome');
    }
    else {
      this.erroS = null;
    }

    if (this.email == null || this.email.indexOf('@') == -1) {
      console.log('Email');
      this.erroEmail = "Email Inválido";
    }
    else {
      this.erroEmail = null;
    }
    if (this.cidade == null) {
      console.log('Cidade');
      this.erroCity = "Cidade Inválida";
    }
    else {
      this.erroCity = null;
    }

    if (this.estado == null) {
      console.log('estado');
      this.erroEst = "Estado Inválido";
    }
    else {
      this.erroEst = null;
    }
    if (this.numero == null || this.numero.length < 9) {
      console.log('numero');
      this.erroNum = "Telefone Inválido";
    }
    else { this.erroNum = null; }
    if (this.texto == null) {
      console.log('texto');
      this.erroMsg = "Campo obrigatório";
    }
    else {
      console.log('Boaaaa');
      this.erroMsg = null;
    }
  }
}

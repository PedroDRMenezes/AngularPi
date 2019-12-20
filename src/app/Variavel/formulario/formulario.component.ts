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
  private erroNome: string;
  private erroS: string;
  private erroEmail: string;
  private erroCity: string;
  private erroEst: string;
  private erroNum: string;
  private erroMsg: string;
  private valida: number;

  constructor() { }

  ngOnInit() {
  }

  VeriF() {
    if (this.nome == null) {
      console.log('nome');
      this.erroNome = "Nome Inválido";
      this.nome = null;

    }
    else {
      this.erroNome = null;
      this.valida++
    }

    if (this.sobreNome == null) {
      this.erroS = "Sobrenome Inválido";

      console.log('sobrenome');
    }
    else {
      this.erroS = null;
      this.valida++
    }

    if (this.email == null || this.email.indexOf('@') == -1) {
      console.log('Email');
      this.erroEmail = "Email Inválido";
    }
    else {
      this.erroEmail = null;
      this.valida++
    }
    if (this.cidade == null) {
      console.log('Cidade');
      this.erroCity = "Cidade Inválida";
    }
    else {
      this.erroCity = null;
      this.valida++
    }

    if (this.estado == null) {
      console.log('estado');
      this.erroEst = "Estado Inválido";
    }
    else {
      this.erroEst = null;
      this.valida++
    }
    if (this.numero == null || this.numero.length < 9) {
      console.log('numero');
      this.erroNum = "Telefone Inválido";
    }
    else {
      this.erroNum = null;
      this.valida++
    }
    if (this.texto == null) {
      console.log('texto');
      this.erroMsg = "Campo obrigatório";
    }
    else {
      this.erroMsg = null;
      this.valida++
    }
    if (this.valida == 7) {
      console.log("boaaaa");
      this.nome = null;
      this.sobreNome = null;
      this.email = null;
      this.cidade = null;
      this.estado = null;
      this.numero = null;
      this.texto = null;
      this.valida = 0;

    }
    else {
      this.valida = 0;
    }

  }
}

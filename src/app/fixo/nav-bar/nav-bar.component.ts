import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  private nome: string;
  private email: string;
  private numero: string;
  private num: any = /^[0-9]+$/;
  private senha: string;
  private senhaFraca: string;
  private senhaForte: string;
  private cSenha: string;
  private erroNome: string;
  private erroEmail: string;
  private erroNum: string;
  private erroSenha: string;
  private erroCSenha: string;

  private valida: number;

  ngOnInit() {
  }

  validacao() {

    if (this.nome == null) {
      this.erroNome = "Nome Inválido";
      this.nome = null;

    }
    else {
      this.erroNome = null;
    }

    if (this.email == null || this.email.indexOf('@' && '.') == -1) {
      this.erroEmail = "Email Inválido";
    }
    else {
      this.erroEmail = null;
    }

    if (this.numero == null || this.numero.length < 10 || this.numero.length > 11 || !this.num.test(this.numero)) {
      this.erroNum = "Telefone Inválido";
    }
    else {
      this.erroNum = null;
    }

    if (this.senha == null) {
      this.erroSenha = "Digite uma senha";
    }
    else {
      this.erroSenha = null;
    }

    if (this.cSenha == null) {
      this.erroCSenha = "Confirme a senha";
    }
    else {
      if (this.cSenha != this.senha) {
        this.erroCSenha = "Confirmação inválida";
      }
      else {
        this.erroCSenha = null;
      }
    }
    if (this.senha.length == 0) {
      this.senhaForte = null;
      this.senhaFraca = null;
      this.erroSenha = "Digite uma senha";
    }
  }

  novaFuncao() {
    if (this.senha != null) {
      if (this.senha.indexOf('&') >= 0  && this.senha.length > 9|| this.senha.indexOf('@') >= 0  && this.senha.length > 9 || this.senha.indexOf('#') >= 0  && this.senha.length > 9 || this.senha.indexOf('%') >= 0  && this.senha.length > 9 || this.senha.indexOf('$') >= 0 && this.senha.length > 9) {
        this.senhaForte = "Senha forte!";
        this.senhaFraca = null;

      }
      else {
        this.senhaFraca = "Senha fraca!";
        this.senhaForte = null;
      }
    }
  }
  validacao2() {

    if (this.nome == null) {
      this.erroNome = "Nome Inválido";
      this.nome = null;

    }
    else {
      this.erroNome = null;
    }

    if (this.email == null || this.email.indexOf('@' && '.') == -1) {

      this.erroEmail = "Email Inválido";
    }
    else {
      this.erroEmail = null;
    }

    if (this.numero == null || this.numero.length < 10 || this.numero.length > 11 || !this.num.test(this.numero)) {

      this.erroNum = "Telefone Inválido";
    }
    else {
      this.erroNum = null;
    }

    if (this.senha == null) {
      this.erroSenha = "Digite uma senha";
    }
    else {
      this.erroSenha = null;
    }

    if (this.cSenha == null) {
      this.erroCSenha = "Confirme a senha";
    }
    else {
      if (this.cSenha != this.senha) {
        this.erroCSenha = "Confirmação inválida";
      }
      else {
        this.erroCSenha = null;
      }
    }
    if (this.senha == null) {
      this.senhaForte = null;
      this.senhaFraca = null;
    }
    console.log("boaaaaa")

     this.email  = null;
     this.numero = null;
     this.num = null;
     this.senha = null;
     this.senhaFraca = null;
     this.senhaForte = null;
     this.cSenha = null;
     this.erroNome = null;
     this.erroEmail = null;
     this.erroNum = null;
     this.erroSenha = null;
     this.nome = null;
     this.erroCSenha = null;

}
  
}

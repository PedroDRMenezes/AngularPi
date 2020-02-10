import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';
import { global } from 'src/app/model/global';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css'],
  providers: [global]
})
export class OpenComponent implements OnInit {

  constructor(public srv: UsuarioService, public router: Router) { }

  ngOnInit() {
  }

  public usuario: Usuario = new Usuario();
  public valida: number = 0;
  public nome: string;
  public email: string;
  public numero: string;
  public num: any = /^[0-9]+$/;
  public senha: string;
  public senhaFraca: string;
  public senhaForte: string;
  public cSenha: string;
  public erroNome: string;
  public erroEmail: string;
  public erroNum: string;
  public erroSenha: string;
  public erroCSenha: string;
  public linkImg: String = null;

  validacao() {
    if (this.nome.length == 0) {
      this.erroNome = "Nome Inválido";

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

    if (this.numero == null || this.numero.length < 10 || this.numero.length > 12 || !this.num.test(this.numero)) {
      this.erroNum = "Telefone Inválido";
    }
    else {
      this.erroNum = null;
    }

    if (this.senha == null) {
      this.senhaForte = null;
      this.senhaFraca = null;
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

  }

  novaFuncao() {

    if (this.senha != null) {
      if (this.senha.indexOf('&') >= 0 && this.senha.length > 9 || this.senha.indexOf('@') >= 0 && this.senha.length > 9 || this.senha.indexOf('#') >= 0 && this.senha.length > 9 || this.senha.indexOf('%') >= 0 && this.senha.length > 9 || this.senha.indexOf('$') >= 0 && this.senha.length > 9) {
        this.senhaForte = "Senha forte!";
        this.senhaFraca = null;

      }
      else {
        this.senhaFraca = "Senha fraca!";
        this.senhaForte = null;
      }
    } else {
      this.senhaForte = null;
      this.senhaFraca = null;
      this.erroSenha = "Digite uma senha";
    }
  }

  validacao2() {

    if (this.nome == null) {
      this.erroNome = "Nome Inválido";
    }
    else {
      this.erroNome = null;
      this.valida++;

    }

    if (this.email == null || this.email.indexOf('@' && '.') == -1) {

      this.erroEmail = "Email Inválido";
    }
    else {
      this.valida++;

      this.erroEmail = null;

    }

    if (this.numero == null || this.numero.length < 10 || this.numero.length > 11 || !this.num.test(this.numero)) {

      this.erroNum = "Telefone Inválido";
    }
    else {

      this.erroNum = null;
      this.valida++;

    }

    if (this.senha == null) {
      this.erroSenha = "Digite uma senha";
    }
    else {
      this.erroSenha = null;
      this.valida++;

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
        this.valida++;


      }
    }

    if (this.senha == null) {
      this.senhaForte = null;
      this.senhaFraca = null;
    }

    if (this.valida == 5) {
      this.usuario.nome = this.nome;
      this.usuario.email = this.email;
      this.usuario.telefone = this.numero;
      this.usuario.senha = this.senha;
      this.email = null;
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
      this.valida = 0;
      console.log("boaaaaa")
      this.enviarDados();
    }
    else {
      console.log("negativo");
      console.log(this.valida)
      this.valida = 0;
    }
  }

  enviarDados() {
    console.log(this.usuario)
    this.usuario.nomeDeUsuario = this.usuario.nome;
    this.usuario.foto = this.linkImg;
    if (this.linkImg == null) {
      this.usuario.foto = "https://image.freepik.com/vetores-gratis/usuarios-do-sistema-de-tango_17-329084610.jpg";
    }else{
    }
    this.srv.adicionaUser(this.usuario).subscribe(
      res => {
        console.log(res)
        alert("inserido com sucesso")
      },
      err => {
        console.log(err)
        alert("erro ao inserir")
      }
    )
  }
}

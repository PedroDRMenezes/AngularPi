import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';
import { global } from 'src/app/model/global';
import * as $ from 'jquery';
import { Token } from 'src/app/model/token';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [global]
})
export class NavBarComponent implements OnInit {

  constructor(private srv: UsuarioService, private router: Router) { }

  enviarDados() {
    console.log(this.usuario)
    this.srv.adicionaUser(this.usuario).subscribe(
      res => {
        console.log(res)
        console.log("inserido com sucesso")
      },
      err => {
        console.log(err)
        alert("erro ao inserir")
      }
    )
  }
  private emailLogin: string;
  private senhaLogin: string;

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

  public condition: number = 1;
  public ID: number = 0;
  public usuario: Usuario = new Usuario();
  private valida: number = 0;

  ngOnInit() {
  }


  public logar() {
    this.usuario.email = this.emailLogin;
    this.usuario.senha = this.senhaLogin;
    
    console.log(this.usuario)
    this.srv.login(this.usuario).subscribe((res:Token)=>{
      
      localStorage.setItem("SaFePeT|",res.strToken);

      this.srv.getuserinfo(res.strToken).subscribe((res:Usuario)=>{
        global.USUARIO = res;
        console.log("usuario logado");        
        console.log(global.USUARIO);
        this.router.navigate(['/Home']);  
      });      
    },
    (err)=>{
      alert("erro")
    })
  }

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

    if (this.numero == null || this.numero.length < 10 || this.numero.length > 11 || !this.num.test(this.numero)) {
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

      this.erroEmail = null;
      this.valida++;
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
  keyPress(a: any) {
    if (a.key == "Enter") {
      this.logar();
    }
  }

}

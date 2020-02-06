import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post';
import { PublicacoesService } from '../../service/publicacoes.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { global } from 'src/app/model/global';
import { UsuarioService } from 'src/app/service/usuario.service';
import * as $ from 'jquery';
import { NovoPost } from 'src/app/model/novoPost';
import { MeuAnimal } from 'src/app/model/meuAnimal';
import { MeuAniService } from 'src/app/service/meu-ani.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [global]
})
export class HomeComponent implements OnInit {

  constructor(private PublicacoesService: PublicacoesService,
    private router: Router,
    private userService: UsuarioService,
    private meuAniService: MeuAniService) { }

  public id: number = 1;
  public posts: Post[];
  public p: Post = new Post();
  public usuario: Usuario = new Usuario();
  public meuAnimal: MeuAnimal = new MeuAnimal();
  public ma: MeuAnimal = new MeuAnimal();
  public meuAniNome: string;
  public meuAniTipo: string;
  public meuAniRaca: string
  public meuAniPorte: string;
  public meuAniNasc: string;
  public meuAniFoto: string;
  public meuAniVac: boolean;
  public meuAniDetalhes: string;
  public show: number = -1;
  public titulo: string;
  public conteudo: string;
  public novoTitulo: string;
  public novoConteudo: string;
  public novoPost: NovoPost = new NovoPost();
  public troca:boolean = true;

  ngOnInit() {
    console.log("Estou na home  ");
    console.log(this.usuario);
    if (!localStorage.getItem("SaFePeT|")) {
      this.router.navigate(['']);
      alert("Faça login primeiro")
    }
    else {
      if (!global.USUARIO) {
        console.log("tenho token mas nao tenho info de usuario");
        this.userService.getuserinfo(localStorage.getItem('SaFePeT|')).subscribe(
          (res: Usuario) => {
            global.USUARIO = res;
            this.usuario = res;
            this.encontrarTodos();
          });
      } else {
        this.usuario = global.USUARIO;
        this.encontrarTodos();
      }
    }
  }
 

  modal(ida: number) {
    this.show = 1;
    console.log(ida);
    this.id = ida;
  }

  encontrarTodos() {
    this.PublicacoesService.getAll().subscribe((res: Post[]) => {
      this.posts = res;
    });
  }

  enviarDados() {
    this.novoPost.postConteudo = this.conteudo;
    this.novoPost.autorPost.id = this.usuario.id;
    console.log(this.novoPost);

    this.PublicacoesService.adicionaPost(this.novoPost).subscribe((res: Post) => {
      console.log(res)
      console.log("inserido com sucesso")
      this.conteudo = null;
      this.encontrarTodos();
    },
      (err) => {
        console.log(err)
        alert("erro ao inserir")
      })
  }

  atualizaUser() {
    this.userService.atualizaUser(this.usuario).subscribe((res: Usuario) => {
      $("#Fechar").click();
      alert("atualizado com sucesso")
    })
  }

  insereNovoAnimal() {
    this.meuAnimal.meuAniNome = this.meuAniNome;
    this.meuAnimal.meuAniTipo = this.meuAniTipo;
    this.meuAnimal.meuAniRaca = this.meuAniRaca;
    this.meuAnimal.meuAniPorte = this.meuAniPorte;
    this.meuAnimal.meuAniNasc = this.meuAniNasc;
    this.meuAnimal.meuAniVacinacao = this.meuAniVac;
    this.meuAnimal.meuAniDetalhes = this.meuAniDetalhes;
    this.meuAnimal.usuario.id = this.usuario.id;
    console.log("Eu Atribui pelo input")
    console.log(this.meuAniNome)
    console.log("")
    console.log("Eu Atribui pelo input")
    console.log(this.meuAniTipo)
    console.log("")
    console.log("")
    console.log("Eu Atribui pelo input o objetoooo")
    console.log(this.meuAnimal);

    this.meuAniService.adicionaMeuAnimal(this.meuAnimal).subscribe((res: MeuAnimal) => {
      $("#Fechar").click();
      alert("Novo animal inserido com sucesso!");
      console.log("Veio pro banco o animalllllll")
      console.log(res)
    })
  }

  atualiza(){
    this.troca = true;
  }

  adiciona(){
  this.troca = false;
  }


}

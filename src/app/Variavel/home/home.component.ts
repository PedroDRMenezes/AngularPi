import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post';
import { PublicacoesService } from '../../service/publicacoes.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { global } from 'src/app/model/global';
import { UsuarioService } from 'src/app/service/usuario.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [global]
})
export class HomeComponent implements OnInit {

 

  constructor(private PublicacoesService: PublicacoesService, 
              private router: Router, 
              private userService: UsuarioService) { }

  public id: number = 1;
  public posts: Post[];
  public p: Post = new Post();
  public usuario: Usuario = new Usuario();
  public show: number = -1;
  public titulo: string;
  public conteudo: string;
  public novoTitulo: string;
  public novoConteudo: string;

  ngOnInit() {
    console.log("Estou na home  ");
    console.log(this.usuario);
    if (!localStorage.getItem("SaFePeT|")) {
      this.router.navigate(['']);
      alert("Faça login primeiro")
    }
    else {
      if (!global.USUARIO){
        console.log("tenho token mas nao tenho info de usuario");
        this.userService.getuserinfo(localStorage.getItem('SaFePeT|')).subscribe(
          (res:Usuario)=>{
             global.USUARIO = res;
             this.usuario = global.USUARIO;
             this.encontrarTodos();
          });
      }else{
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
    this.p.postConteudo = this.conteudo;
    this.userService.getUserId(this.usuario.id).subscribe((res:Usuario)=>{
      console.log("Peguei o usuario")
      console.log(res)
      this.p.autorPost = res;
    });
    console.log("veio assim")
    console.log(this.p.autorPost)
    console.log(this.p)

    this.PublicacoesService.adicionaPost(this.p).subscribe((res: Post) => {
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
  
  atualizaUser(){
    this.userService.atualizaUser(this.usuario).subscribe((res:Usuario)=>{
      $("#Fechar").click();
      alert("atualizado com sucesso")
    })
  }
}

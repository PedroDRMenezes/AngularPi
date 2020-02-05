import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post';
import { PublicacoesService } from '../../service/publicacoes.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { global } from 'src/app/model/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css'],
  providers: [global]
})
export class HomeComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(private PublicacoesService: PublicacoesService, private router: Router) { }
  public id: number = 1;
  public posts: Post[];
  public p: Post = new Post();

  public show: number = -1;
  public titulo: string;
  public conteudo: string;
  public novoTitulo: string;
  public novoConteudo: string;

  ngOnInit() {
    
    this.usuario = global.USUARIO; 
    console.log("Estou na home  ");
    console.log(this.usuario);
    if (!localStorage.getItem("SaFePeT|") || !global.USUARIO) {
      this.router.navigate(['']);
      alert("Faça login primeiro")
    }
    else {
      this.encontrarTodos();
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
    this.p.autorPost = global.USUARIO;
    this.p.autorPost.post = [];
    this.p.autorPost.comentario = [];
    this.p.comentarios = null;
    this.p.postImg="";
    this.p.postLike=0;


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
}
 
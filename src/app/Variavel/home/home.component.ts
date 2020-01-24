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

  usuario: Usuario;

  constructor(private PublicacoesService: PublicacoesService, private router: Router) { }
  public id:number = 1;
  public posts: Post[];
  public p:Post = new Post();
  public show:number = -1;

  public titulo:string;
  public conteudo:string;
  public novoTitulo:string;
  public novoConteudo:string;

  ngOnInit() {
    this.usuario = global.USUARIO;
    if (!this.usuario) {
      this.router.navigate(['']);
      alert("Faça login primeiro")
    }
    else {
      this.encontrarTodos();
    }
  
  }
  modal(ida:number){
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
    
    this.p.id = this.id;
    this.p.conteudo = this.conteudo;
    this.p.titulo = this.titulo;
   
    console.log(this.p)
    this.PublicacoesService.adicionaUser(this.p).subscribe(
      res => {
        console.log(res)
        console.log("inserido com sucesso")
        this.id++;
        this.conteudo = null;
        this.titulo = null;
        this.encontrarTodos();
      },
      err => {
        console.log(err)
        alert("erro ao inserir")
      }
    )
  }
}

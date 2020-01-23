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

  posts: Post[];

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
  encontrarTodos() {
    this.PublicacoesService.getAll().subscribe((resposta: Post[]) => {
      this.posts = resposta;
    });
  }
}

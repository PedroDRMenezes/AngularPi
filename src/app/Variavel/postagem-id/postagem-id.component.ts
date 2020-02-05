import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post';
import { PublicacoesService } from '../../service/publicacoes.service';

import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { global } from 'src/app/model/global';


@Component({
  selector: 'app-postagem-id',
  templateUrl: './postagem-id.component.html',
  styleUrls: ['./postagem-id.component.css']
})
export class PostagemIdComponent implements OnInit {

  id: number;
  post: Post = null;
  usuario:Usuario;
  constructor(private PublicacoesService: PublicacoesService, private router: Router) { }

  ngOnInit() {
    this.usuario = global.USUARIO;
    if (!this.usuario) {
      this.router.navigate(['']);
      alert("Faça login primeiro")
    }
    else {
      

    }
  
  }
  procurarId() {
    this.PublicacoesService.getId(this.id).subscribe((resposta: Post) => {this.post = resposta});
    console.log(this.post);
  }

}

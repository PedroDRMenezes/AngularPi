import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post';
import { PublicacoesService } from '../../service/publicacoes.service';

import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { global } from 'src/app/model/global';
import { UsuarioService } from 'src/app/service/usuario.service';


@Component({
  selector: 'app-postagem-id',
  templateUrl: './postagem-id.component.html',
  styleUrls: ['./postagem-id.component.css']
})
export class PostagemIdComponent implements OnInit { 

  
  usuario:Usuario;
  constructor(
              private router: Router,
              private userService:UsuarioService) { }

  ngOnInit() {
    console.log("Estou no BuscaId");
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
            this.encontraMeusPost();
            
          });
      } else {
        console.log("tenho token e Usuario");
        this.usuario = global.USUARIO;
        this.encontraMeusPost();
      }
    }
  }

  id: number;
  post: Array<Post> = new Array();

  encontraMeusPost() {
    this.post = this.usuario.post;
    console.log("Estamos aqioooooo")
    console.log(this.post)
  }

}

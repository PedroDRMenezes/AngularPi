import { Component, OnInit } from '@angular/core';
import { AnimalAdocao } from 'src/app/model/animalAdocao';
import { AnimalAdocaoService } from 'src/app/service/animal-adocao.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { global } from 'src/app/model/global';

@Component({
  selector: 'app-listagem-adocao',
  templateUrl: './listagem-adocao.component.html',
  styleUrls: ['./listagem-adocao.component.css'],
  providers: [global]
})
export class ListagemAdocaoComponent implements OnInit {



  constructor(private anima: AnimalAdocaoService,
    private router: Router,
    private userService: UsuarioService) { }

  ngOnInit() {
    console.log("Estou na listagem  ");
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
            this.animaisAdocao;
          });
      } else {
        this.usuario = global.USUARIO;
        this.animaisAdocao;

      }
    }

  }
  

  usuario:Usuario;
  lista: Array<AnimalAdocao> = new Array();
 
  public animaisAdocao(){
    this.anima.getAnimalAll().subscribe((res:AnimalAdocao[])=>{
      this.lista =  res;
    })
  }

}

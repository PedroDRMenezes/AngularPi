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

  constructor(private srv: UsuarioService, private router: Router, private userService: UsuarioService) { }


  private emailLogin: string;
  private senhaLogin: string;

  public condition: number = 1;
  public ID: number = 0;
  public usuario: Usuario = new Usuario();
  private valida: number = 0;

  ngOnInit() {
    console.log("Estou na navBar");
    console.log(this.usuario);
    if (!localStorage.getItem("SaFePeT|")) {
    }
    else {
      if (!global.USUARIO) {
        console.log("tenho token mas nao tenho info de usuario");
        this.userService.getuserinfo(localStorage.getItem('SaFePeT|')).subscribe(
          (res: Usuario) => {
            global.USUARIO = res;
            this.usuario = global.USUARIO;
            this.condition = 0;
          });
      }
      else {
        this.condition = 1;
      }
    }

  }


  public logar() {
    this.usuario.email = this.emailLogin;
    this.usuario.senha = this.senhaLogin;

    console.log(this.usuario)
    this.srv.login(this.usuario).subscribe((res: Token) => {

      localStorage.setItem("SaFePeT|", res.strToken);

      this.srv.getuserinfo(res.strToken).subscribe((res: Usuario) => {
        global.USUARIO = res;
        console.log("usuario logado");
        console.log(global.USUARIO);
        $("#fechar").click();
        this.condition = 0;
        this.router.navigate(['/home']);
      });
    },
      (err) => {
        alert("erro")
        this.condition = 1;
      })
  }

  keyPress(a: any) {
    if (a.key == "Enter") {
      this.logar();
    }
  }

}

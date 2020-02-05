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


  private emailLogin: string;
  private senhaLogin: string;

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
    this.srv.login(this.usuario).subscribe((res: Token) => {

      localStorage.setItem("SaFePeT|", res.strToken);

      this.srv.getuserinfo(res.strToken).subscribe((res: Usuario) => {
        global.USUARIO = res;
        console.log("usuario logado");
        console.log(global.USUARIO);
        this.condition = 0;
        $("#fechar").click();
        this.router.navigate(['/Home']);

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

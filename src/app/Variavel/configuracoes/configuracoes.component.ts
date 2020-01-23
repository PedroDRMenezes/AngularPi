import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { global } from 'src/app/model/global';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {
  usuario:Usuario;
  public listaUser:Usuario[];

  constructor(private srv : UsuarioService,private router: Router) { }

  ngOnInit() {
    this.usuario = global.USUARIO;
    if (!this.usuario) {
      this.router.navigate(['']);
      alert("Faça login primeiro")
    }
    else {
      this.srv.getUserAll().subscribe((res:Usuario[])=>{
        this.listaUser=res;
      })
    }
  }

}

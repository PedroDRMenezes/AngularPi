import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {

  public listaUser:Usuario[];

  constructor(private srv : UsuarioService) { }

  ngOnInit() {
    this.srv.getUserAll().subscribe((res:Usuario[])=>{
      this.listaUser=res;
    })
  }

}

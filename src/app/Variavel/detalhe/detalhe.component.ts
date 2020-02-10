import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {
  
  public usuario:Usuario = new Usuario();
  public id: number;
  
  constructor(public rota : ActivatedRoute, public srv:UsuarioService) { }

  ngOnInit() {
    this.id = this.rota.snapshot.params["id"];
    console.log("Veio como parametro o valor = "+this.id)

    this.srv.getUserId(this.id).subscribe((res:Usuario)=>{
      this.usuario=res;
      console.log("Recuperado");
      console.log(this.usuario)
    })
  }

  enviarAlteracoes(){
    this.srv.atualizaUser(this.usuario).subscribe((res)=>{
      console.log("Atualizado com sucesso");
      alert("Atualizado com sucesso");
    },
    (err)=>{
      alert("Email ja existente")
      console.log("Erro ao atualizar")
      console.log(err)
    }
    )
  }

}

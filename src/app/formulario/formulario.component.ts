import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  private nome: string;
  private sobreNome: string;
  private email: string;
  private cidade: string;
  private estado: string;
  private numero: string;
  private texto: string;
  constructor() { }

  ngOnInit() {
  }

  VeriF() {
    if (this.nome == null) {
      console.log('nome');
    }
    else {
      if (this.sobreNome == null) {
        console.log('sobrenome');
      }
      else {
        if (this.email == null || this.email.indexOf('@') == -1) {
          console.log('Email');
        }
        else {
          if (this.cidade == null) {
            console.log('Cidade');
          }
          else {
            if (this.estado == null){
              console.log('estado');
            }
            else{
              if(this.numero == null || this.numero.length<9){
                console.log('numero');
              }
              else{
                if(this.texto == null){
                  console.log('texto');
                }
                else{
                  console.log('Boaaaa caralho');
                }
              }
            }
          }
        }
      }
    }



  }


}

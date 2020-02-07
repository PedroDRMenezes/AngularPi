import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalAdocaoService } from 'src/app/service/animal-adocao.service';
import { AnimalAdocao } from 'src/app/model/animalAdocao';
import { Usuario } from 'src/app/model/usuario';
import { global } from 'src/app/model/global';
import { UsuarioService } from 'src/app/service/usuario.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [global]
})
export class FormularioComponent implements OnInit {
  
  public animalAdocao: AnimalAdocao = new AnimalAdocao();
  private tipo: string;
  private porte: string;
  private local: string;
  private detalhes: string;
  public id: number;
  public nome: string;
  public raca: string;
  public vacinacao: boolean;
  public foto: string;
  private erroNome: string;
  private erroTipo: string;
  private erroPorte: string;
  private erroLocal: string;
  private erroDetalhes: string;
  private erroFoto:string;
  private erroRaca:string;
  private cont: number=0;
  public usuario: Usuario
  private vacina : string;
private erroVacinacao:string;
  constructor(private srv: AnimalAdocaoService,
               private router: Router,
               private userService: UsuarioService) { }

  ngOnInit() {
    console.log("Estou na home  ");
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

          });
      } else {
        this.usuario = global.USUARIO;

      }
    }
  }

  valida(){
    if(this.nome==null){
      this.erroNome = "Nome Inválido";
      this.nome = null;
      this.cont++;
    }
    else{
      this.erroNome = null;
    }
    if(this.raca==null){
      this.erroRaca = "Raça Inválida";
      this.raca = null;
      this.cont++;
    }
    else{
      this.erroRaca = null;
    }
    if(this.foto==null){
      this.erroFoto = "Foto Inválida";
      this.foto = null;
      this.cont++;
    }
    else{
      this.erroFoto = null;
    }


    if(this.tipo==null){
      this.erroTipo = "Tipo Inválido";
      this.tipo = null;
      this.cont++;
    }
    else{
      this.erroTipo = null;
    }
    if(this.porte==null){
      this.erroPorte = "Porte Inválido";
      this.porte = null;
      this.cont++;
    }
    else{
      this.erroPorte = null;
    }
    if(this.porte == "Pequeno"){
      this.porte = "p";
    }
    else if(this.porte == "Médio"){
      this.porte = "m";
    }
    else{
      this.porte = "g";
    }
    if(this.local==null){
      this.erroLocal = "Local Inválido";
      this.local = null;
      this.cont++;
    }
    else{
      this.erroLocal = null;
    }
    if(this.detalhes==null){
      this.erroDetalhes = "Detalhe Inválido";
      this.detalhes = null;
      this.cont++;
    }
    
    else{
      this.erroDetalhes = null;
    }
    if(this.vacina==null){
      this.erroVacinacao = "Informação Obrigatória";
      this.vacina = null;
      this.cont++;
    }
    
    else{
      this.erroVacinacao = null;
    }
    if(this.vacina=="Vacinado"){
      this.vacinacao = true;
    }
    else{
      this.vacinacao = false;
    }

    if (this.cont == 0) {
      alert("FOI")
    this.enviarDados();
    
    }
    else{
      alert("erro validacao");
    }
  }

  enviarDados() {
    this.animalAdocao.adocaoNome = this.nome;
    this.animalAdocao.adocaoTipo = this.tipo;
    this.animalAdocao.adocaoRaca = this.raca;
    this.animalAdocao.adocaoPorte = this.porte;
    this.animalAdocao.adocaoLocal = this.local;
    this.animalAdocao.adocaoVacinacao = this.vacinacao;
    this.animalAdocao.adocaoFoto = this.foto;
    this.animalAdocao.adocaoDetalhes = this.detalhes;
    this.animalAdocao.usuario.id = this.usuario.id;   
    
    console.log("Estou mandarndo o objeto")
    console.log (this.animalAdocao)
    this.srv.adicionaAnimal(this.animalAdocao).subscribe((res: AnimalAdocao[] )=> {
      alert("Enviado com sucesso");
    },
    (err) => {
      alert("Erro enviar dados");
    }
    );

  }
}
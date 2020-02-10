import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http: HttpClient) { }

  public getUserAll() {
    return this.http.get("http://safepet.tech:8080/usuario")
  }

  public getUserId(id: number) {
    return this.http.get(`http://safepet.tech:8080/usuario/${id}`)
  }

  public adicionaUser(usuario: Usuario) {
    return this.http.post("http://safepet.tech:8080/usuario/novo", usuario)
  }

  public atualizaUser(usuario: Usuario) {
    
    return this.http.put("http://safepet.tech:8080/usuario/atualiza", usuario)
  }

  public login(usuario: Usuario) {
    return this.http.post("http://safepet.tech:8080/login", usuario); 
  }

  public getuserinfo(token: string){
    return this.http.get("http://safepet.tech:8080/usuario/userinfo?token="+token);
  }

}

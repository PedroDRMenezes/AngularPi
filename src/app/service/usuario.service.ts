import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  public getUserAll() {
    return this.http.get("http://cloud.professorisidro.com.br:8088/usuario/all")
  }

  public getUserId(id: number) {
    return this.http.get(`http://cloud.professorisidro.com.br:8088/usuario/${id}`)
  }

  public adicionaUser(usuario:Usuario){
    return this.http.post("http://cloud.professorisidro.com.br:8088/usuario/new", usuario)
  }

  public atualizaUser(usuario:Usuario){
    return this.http.put("http://cloud.professorisidro.com.br:8088/usuario/", usuario)
  }

  public login(usuario: Usuario){
    return this.http.post("http://cloud.professorisidro.com.br:8088/usuario/login", usuario);
  }

}

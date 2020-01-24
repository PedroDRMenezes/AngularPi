import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PublicacoesService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("http://localhost:8080/home/todos")
  }

  getId(id: number) {
    return this.http.get(`http://localhost:8080/home/${id}`)
  }

  public adicionaUser(post:Post){
    return this.http.post("http://localhost:8080/home/new", post)
  }

  public atualizaPost(post: Post){
    return this.http.put("http://localhost:8080/home", post)
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post';
import { NovoPost } from '../model/novoPost';

@Injectable({
  providedIn: 'root'
})
export class PublicacoesService {

  constructor(public http: HttpClient) { }

  getAll() {
    return this.http.get("http://safepet.tech:8080/post")
  }

  getId(id: number) {
    return this.http.get(`http://safepet.tech:8080/post/${id}`)
  }

  public adicionaPost(post:NovoPost){ 
    return this.http.post("http://safepet.tech:8080/post/novo", post)
  }

  public atualizaPost(post: Post){
    return this.http.put("http://safepet.tech:8080/post/atualiza", post)
  }

}
 
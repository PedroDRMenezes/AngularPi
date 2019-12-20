import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicacoesService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("http://cloud.professorisidro.com.br:8088/postagens")
  }

  getId(id: number) {
    return this.http.get(`http://cloud.professorisidro.com.br:8088/postagens/${id}`)
  }
}

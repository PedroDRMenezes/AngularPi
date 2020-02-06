import { Injectable } from '@angular/core';
import { MeuAnimal } from '../model/meuAnimal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeuAniService {

  constructor(private http: HttpClient) { }

  public getAllMeuAnimal() {
    return this.http.get("http://localhost:8080/meuAnimal")
  }

  public getMeuAnimalId(id: number) {
    return this.http.get(`http://localhost:8080/meuAnimal/`+{id})
  }

  public adicionaMeuAnimal(meuAnimal: MeuAnimal) {
    console.log("ativou o servico");
    return this.http.post("http://localhost:8080/meuAnimal/novo", meuAnimal)
  }
}

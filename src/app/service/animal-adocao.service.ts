import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimalAdocao } from '../model/animalAdocao';

@Injectable({
  providedIn: 'root'
})
export class AnimalAdocaoService {

  constructor(private http: HttpClient) {}
  
    public getAnimalAll() {
      return this.http.get("http://safepet.tech:8080/animalAdocao");
    }

  public adicionaAnimal(animalAdocao: AnimalAdocao) {
    return this.http.post("http://safepet.tech:8080/animalAdocao/novo", animalAdocao);
  }

}

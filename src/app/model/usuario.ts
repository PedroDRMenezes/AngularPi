import { Post } from './post';
import { Comentarios } from './comentarios';
import { MeuAnimal } from './meuAnimal';
import { AnimalAdocao } from './animalAdocao';

export class Usuario {
    public id: number;
    public nome: string;
    public nomeDeUser: String;
    public dataNasc: String;
    public foto:String;
    public email: String;
    public telefone: String;
    public cep: String;
    public senha:String;
    public meuAnimal:MeuAnimal;
    public AniAdocao:AnimalAdocao;
    public post: Post[];
    public comentario: Comentarios[]; 
} 

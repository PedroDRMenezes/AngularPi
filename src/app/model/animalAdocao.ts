import { Usuario } from './usuario';

export class AnimalAdocao {
    public id: number;
    public adocaoNome: String;
    public adocaoTipo: String;
    public adocaoRaca: String;
    public adocaoPorte: String;
    public adocaoLocal: String;
    public adocaoVacinacao: boolean;
    public adocaoDetalhes: String;
    public adocaoFoto: String;
    public usuario: Usuario  = new Usuario();
}
import { Usuario } from './usuario';

export class AnimalAdocao {
    public id: number;
    public adocaoNome: string;
    public adocaoTipo: string;
    public adocaoRaca: string;
    public adocaoPorte: string;
    public adocaoLocal: string;
    public adocaoVacinacao: boolean;
    public adocaoDetalhes: string;
    public adocaoFoto: string;
    public usuario: Usuario  = new Usuario();
}
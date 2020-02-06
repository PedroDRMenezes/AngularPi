import { Usuario } from './usuario';

export class MeuAnimal {
    public id: number;
    public meuAniNome: String;
    public meuAniTipo: String;
    public meuAniRaca: String;
    public meuAniPorte: String;
    public meuAniVacinacao: boolean;
    public meuAniNasc: String;
    public meuAniDetalhes: String;
    public meuAniFoto: String;
    public usuario: Usuario = new Usuario();

}
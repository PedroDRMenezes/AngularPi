import { Usuario } from './usuario';

export class MeuAnimal {
    public id: number;
    public MeuAniNome: String;
    public MeuAniTipo: String;
    public MeuAniRaca: String;
    public MeuAniPorte: String;
    public MeuAniVacinacao: boolean;
    public MeuAniNasc: String;
    public MeuAniDetalhes: String;
    public MeuAniFoto: String;
    public usuario: Usuario = new Usuario();

}
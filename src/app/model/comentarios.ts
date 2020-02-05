import { Usuario } from './usuario';
import { Post } from './post';

export class Comentarios {
    public id: number;
    public commentConteudo: string;
    public commentlike: number;
    public autorComentario: Usuario = new Usuario();
    public post: Post = new Post();
}

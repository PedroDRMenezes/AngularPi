import { Comentarios } from './comentarios';
import { Usuario } from './usuario';

export class Post {
    public postId: number;
    public postConteudo: string;
    public postImg: String;
    public postLike: number;
    public comentarios: Comentarios[];
    public autorPost: Usuario;
}
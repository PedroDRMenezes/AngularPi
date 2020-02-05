import { SimplesUser } from './SimplesUser';


export class NovoPost{
    public postId: number;
    public postConteudo: string;
    public postImg: String;
    public postLike: number;
    public autorPost: SimplesUser = new SimplesUser();
}
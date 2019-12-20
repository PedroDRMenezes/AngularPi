export class Post {

    constructor (
    private idPostagem: number,
    private titulo: string,
    private texto: string,
    private linkimg: string
    ) {}

    public getIdPostagem(): number {
        return this.idPostagem
    }

    public setIdPostagem(_idPostagem: number): void {
        this.idPostagem = _idPostagem;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(_Titulo: string): void {
        this.titulo = _Titulo;
    }

    public getTexto(): string {
        return this.texto
    }

    public setTexto(_Texto: string): void {
        this.texto = _Texto;
    }

    public getLinkimg(): string {
        return this.linkimg
    }

    public setLinkimg(_Linkimg: string): void {
        this.linkimg = _Linkimg;
    }
}
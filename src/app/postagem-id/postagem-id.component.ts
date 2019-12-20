import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PublicacoesService } from '../service/publicacoes.service';

@Component({
  selector: 'app-postagem-id',
  templateUrl: './postagem-id.component.html',
  styleUrls: ['./postagem-id.component.css']
})
export class PostagemIdComponent implements OnInit {

  id: number;
  post: Post = null;

  constructor(private PublicacoesService: PublicacoesService) { }

  ngOnInit() {
  }
  procurarId() {
    this.PublicacoesService.getId(this.id).subscribe((resposta: Post) => {this.post = resposta});
    console.log(this.post);
  }

}

import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post';
import { PublicacoesService } from '../../service/publicacoes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(private PublicacoesService: PublicacoesService) { }

  posts: Post[];
  ngOnInit() {
   this.encontrarTodos();
  }

  encontrarTodos() {
      this.PublicacoesService.getAll().subscribe((resposta: Post[]) => {
        this.posts = resposta;
      });
  }
}

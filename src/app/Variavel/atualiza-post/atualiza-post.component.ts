import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicacoesService } from 'src/app/service/publicacoes.service';

@Component({
  selector: 'app-atualiza-post',
  templateUrl: './atualiza-post.component.html',
  styleUrls: ['./atualiza-post.component.css']
})
export class AtualizaPostComponent implements OnInit {
  public post:Post = new Post();
  public id:number;

  constructor(private rota:ActivatedRoute, private srv:PublicacoesService, private router:Router) { }

  ngOnInit() {
    this.id = this.rota.snapshot.params["id"];
    console.log(this.id);

    this.srv.getId(this.id).subscribe((res:Post)=>{
      this.post = res;
      console.log("Pegou");
      console.log(this.post);
    })
  }
  atualizaDados(){
    this.srv.atualizaPost(this.post).subscribe((res)=>{
      alert("Atualizado com sucesso");
      this.router.navigate(['/Home']);
    },
    (err)=>{
      alert("Atualizado sem sucesso");
    });
  }
}

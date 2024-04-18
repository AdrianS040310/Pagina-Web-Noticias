import { Component } from '@angular/core';
import { NoticiaJassService } from './services/noticia-jass.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias-jass';

  listNoticias: any[] = [];
  loading = false;

  constructor(private _noticiaService: NoticiaJassService) {

  }

  buscarNoticias(parametros: any) {
    this.loading = true;
    this.listNoticias = [];

    setTimeout(() => {
      this._noticiaService.getNoticias(parametros).subscribe((data: any) => {
        this.loading = false;
        this.listNoticias = data.articles;
      }, error => {
        console.log(error);
        this.loading = false;
      });
    }, 1000);
  }
}

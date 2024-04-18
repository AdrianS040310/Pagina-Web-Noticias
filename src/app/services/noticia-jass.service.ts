import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaJassService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any) {
    const URL = 'https://newsapi.org/v2/top-headlines?country=' +
      parametros.pais + '&category=' + parametros.categoria + '&apiKey=6b7f6e166c6b456681d066ca53880023'
    return this.http.get(URL)
  }
}

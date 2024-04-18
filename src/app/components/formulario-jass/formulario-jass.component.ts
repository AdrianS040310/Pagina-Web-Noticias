import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'jass-app-formulario-jass',
  templateUrl: './formulario-jass.component.html',
  styleUrls: ['./formulario-jass.component.css']
})
export class FormularioJassComponent implements OnInit {

  @Output() parametrosSeleccionados = new EventEmitter<any>;

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'mx';

  categorias: any[] = [
    { value: 'general', nombre: 'General' },
    { value: 'bussines', nombre: 'Negocios' },
    { value: 'entertaiment', nombre: 'Entretenimiento' },
    { value: 'health', nombre: 'Salud' },
    { value: 'science', nombre: 'Ciencia' },
    { value: 'sports', nombre: 'Deportes' },
    { value: 'tecnology', nombre: 'Tecnologia' },
  ];
  paises: any[] = [
    { value: 'mx', nombre: 'Mexico' },
    { value: 'ar', nombre: 'Argentina' },
    { value: 'br', nombre: 'Brasil' },
    { value: 'fr', nombre: 'Francia' },
    { value: 'hu', nombre: 'Hungria' },
    { value: 'gb', nombre: 'Reino Unido' },
    { value: 'ae', nombre: 'Emiratos Árabes Unidos' },
    { value: 'at', nombre: 'Austria' },
    { value: 'au', nombre: 'Australia' },
    { value: 'be', nombre: 'Bélgica' },
    { value: 'bg', nombre: 'Bulgaria' },
    { value: 'ca', nombre: 'Canadá' },
    { value: 'ch', nombre: 'Suiza' },
    { value: 'cn', nombre: 'China' },
    { value: 'co', nombre: 'Colombia' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia() {
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS)
  }
}

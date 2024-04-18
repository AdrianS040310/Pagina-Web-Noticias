import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jass-app-navbar-jass',
  templateUrl: './navbar-jass.component.html',
  styleUrls: ['./navbar-jass.component.css']
})
export class NavbarJassComponent implements OnInit {
  @Input() titulo: string;

  constructor() {
    this.titulo = ';'
  }

  ngOnInit(): void {
  }

}

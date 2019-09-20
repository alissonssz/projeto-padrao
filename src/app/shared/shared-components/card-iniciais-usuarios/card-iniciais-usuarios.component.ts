import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'pp-card-iniciais-usuarios',
  templateUrl: './card-iniciais-usuarios.component.html',
  styleUrls: ['./card-iniciais-usuarios.component.css']
})
export class CardIniciaisUsuariosComponent implements OnInit {

  @Input() usuarios: Array<Usuario>;
  @Input() coresPossiveis: Array<string>;
  @Input() corTexto: Array<string>;
  constructor() { }

  ngOnInit() {
  }

}

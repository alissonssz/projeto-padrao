import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pp-container-padrao',
  templateUrl: './container-padrao.component.html',
  styleUrls: ['./container-padrao.component.css']
})
export class ContainerPadraoComponent implements OnInit {

  constructor() { }
  @Input() 
  titulo: string;
  ngOnInit() {
  }

}

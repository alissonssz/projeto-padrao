import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'pp-modal-exemplo',
  templateUrl: './modal-exemplo.component.html',
  styleUrls: ['./modal-exemplo.component.css']
})
export class ModalExemploComponent implements OnInit {

  @Output()
  $salvar: EventEmitter<any> = new EventEmitter();
  @Output()
  $fechar: EventEmitter<any> = new EventEmitter();

  titulo: string;

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  salvar() {
    this.$salvar.emit('Testando Salvar');
    this.fecharModal();
  }

  fecharModal() {
    this.bsModalRef.hide();
  }

}

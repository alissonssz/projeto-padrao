import { Injectable, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalRef: BsModalRef;
  constructor(private bsModalService: BsModalService) { }


  abrirModal(conteudo: TemplateRef<any> | any , options?: ModalOptions): any {
    this.modalRef = this.bsModalService.show(conteudo, {
      animated: options.animated || true,
      backdrop: options.backdrop || true,
      ignoreBackdropClick: options.ignoreBackdropClick || true,
      class: options.class || 'modal-dialog modal-lg',
      focus: options.focus || true,
      initialState: options.initialState,
      keyboard: options.keyboard || false,
      show: options.show
    });
    return this.modalRef.content;
  }

  esconderModal() {
    this.modalRef.hide();
  }

}

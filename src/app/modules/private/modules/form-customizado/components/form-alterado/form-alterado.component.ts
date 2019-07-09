import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pp-form-alterado',
  templateUrl: './form-alterado.component.html',
  styleUrls: ['./form-alterado.component.css']
})
export class FormAlteradoComponent implements OnInit {

  formCustomizado: FormGroup;
  listaRadio: Array<any>;
  constructor(
    private formBuilder: FormBuilder
  ) { 

  }

  ngOnInit() {
    this.inicializarFormCustomizado();
    this.inicializarRadio();
  }

  inicializarFormCustomizado() {
    this.formCustomizado = this.formBuilder.group({
      nome: [null, []],
      radio: [null],
      sn: [null]
    });
  }

  inicializarRadio() {
    this.listaRadio = [
      {
        nome: 'Sim',
        valor: 'S'
      },
      {
        nome: 'Não',
        valor: 'N'
      }
    ]
  }

  submeterForm() {
    console.log(this.formCustomizado);
  }

  alterarRadio() {
    // this.formCustomizado.patchValue(
    //   {
    //     nome: 'Alisson',
    //     radio: 'S'
    //   }
    // )
    this.formCustomizado.get('nome').setValue('Alisson');
    this.formCustomizado.get('radio').setValue('S');
    this.formCustomizado.get('sn').setValue('N');
  }

  reset() {
    this.formCustomizado.reset();
  }

}

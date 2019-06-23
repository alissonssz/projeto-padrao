import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ItemGenerico } from 'src/app/shared/shared-models/item-generico';
import { noConflict } from 'q';

@Component({
  selector: 'pp-form-classico',
  templateUrl: './form-classico.component.html',
  styleUrls: ['./form-classico.component.css']
})
export class FormClassicoComponent implements OnInit {

  formClassico: FormGroup;
  listaInteresses: Array<ItemGenerico>;
  listaSexo: Array<ItemGenerico>;
  listaEstadoCivil: Array<ItemGenerico>;
  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.listaInteresses = new Array<ItemGenerico>();
    this.listaSexo = new Array<ItemGenerico>();
    this.listaEstadoCivil = new Array<ItemGenerico>();
  }

  ngOnInit() {
    this.inicializarFormClassico();
    this.mockarlistaInteresses()
    this.mockarlistaSexo();
    this.mockarListaEstadoCivil();
  }

  inicializarFormClassico() {
    this.formClassico = this.formBuilder.group({
      nome: [null, []],
      email: [null, []],
      idade: [null, []],
      cpf: [null, []],
      sexo: [null, []],
      interesses: [null],
      estadoCivil: [null, []],
    });
  }

  mockarlistaInteresses() {
    this.listaInteresses = [
      {
        id: 1,
        nome: 'Cultura'
      },
      {
        id: 2,
        nome: 'Tecnologia'
      },
      {
        id: 3,
        nome: 'Automobilismo'
      }
    ]
  }

  mockarlistaSexo() {
    this.listaSexo = [
      {
        id: 1,
        nome: 'Masculino'
      },
      {
        id: 2,
        nome: 'Feminino'
      },
      {
        id: 3,
        nome: 'Outro'
      }
    ]
  }

  mockarListaEstadoCivil() {
    this.listaEstadoCivil = [
      {
        id: 1,
        nome: 'Solteiro'
      },
      {
        id: 2,
        nome: 'Casado'
      },
      {
        id: 3,
        nome: 'Divorciado'
      }
    ]
  }

  salvarForm() {
    console.log('FormGroup', this.formClassico);
    console.log('RawValue', this.formClassico.getRawValue());
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pp-form-classico',
  templateUrl: './form-classico.component.html',
  styleUrls: ['./form-classico.component.css']
})
export class FormClassicoComponent implements OnInit {

  formClassico: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.inicializarFormClassico();
  }

  inicializarFormClassico() {
    this.formClassico = this.formBuilder.group({
      nome: [null, []],
      email: [null, []],
      idade: [null, []],
      cpf: [null, []],
      sexo: [null, []],
      interesses: [null, []],
      estadoCivil: [null, []],
    });
  }

  salvarForm() {
    console.log('FormGroup', this.formClassico);
    console.log('RawValue', this.formClassico.getRawValue());
    
  }

}

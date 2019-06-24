import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { ItemGenerico } from 'src/app/shared/shared-models/item-generico';
import { PessoaService } from '../../services/pessoa-service';
import { Pessoa } from '../../models/pessoa.model';

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
    private pessoaService: PessoaService,
    private formBuilder: FormBuilder
  ) { 
    this.listaInteresses = new Array<ItemGenerico>();
    this.listaSexo = new Array<ItemGenerico>();
    this.listaEstadoCivil = new Array<ItemGenerico>();
  }

  ngOnInit() {
    this.inicializarFormClassico();
    //this.mockarlistaInteresses()
    //this.mockarListaEstadoCivil();
    //this.mockarlistaSexo();
    this.consultarListaEstadoCivil();
    this.consultarlistaSexo();
    this.consultarListaInteresses()
    
  }

  inicializarFormClassico() {
    this.formClassico = this.formBuilder.group({
      nome: [null, []],
      email: [null, []],
      idade: [null, []],
      cpf: [null, []],
      sexo: [null, []],
      interesses: this.formBuilder.array([]),
      estadoCivil: [null, []],
    });
  }

  consultarListaInteresses() {
    this.pessoaService.getInteresses().
      subscribe(
        (res) => {
          this.listaInteresses = res;
        },
        (err) => {
          console.log('erro interesses', err); 
        },
        () => {
          this.gerarFormArrayInteresses();
        },
      );
  }

  gerarFormArrayInteresses() {
    return this.listaInteresses.map(
      (interesse) => {
        (this.formClassico.get('interesses') as FormArray).push(this.formBuilder.control(false))
      }
    )
  }

  // gerarFormArrayInteresses() {
  //   return this.listaInteresses.map(
  //     (interesse) => {
  //       (<FormArray>this.formClassico.get('interesses')).push(this.gerarFormGroup())
  //     } 
  //   )
  // }

  // gerarFormGroup() {
  //   return this.formBuilder.group({
  //     id: null,
  //     nome: null
  //   })
  // }

  consultarlistaSexo() {
    this.pessoaService.getSexo().
    subscribe(
      (res) => {
        this.listaSexo = res;
      },
      (err) => {
        console.log('erro sexo', err); 
      },
      () => {
      },
    );
  }

  consultarListaEstadoCivil() {
    this.pessoaService.getEstadoCivil().
    subscribe(
      (res) => {
        this.listaEstadoCivil = res;
      },
      (err) => {
        console.log('erro estado civil', err); 
      },
      () => {

      },
    );
  }

  getFormArray(nome: string): FormArray {
    return (<FormArray>this.formClassico.get(nome));
  }

  salvarForm() {
    console.log('FormGroup', this.formClassico);
    console.log('RawValue', this.formClassico.getRawValue());
    let pessoaEnvio: Pessoa = this.formClassico.getRawValue();
    console.log('pessoa envio', pessoaEnvio);
    this.tratarCheckbox();
    // this.formClassico.controls['interesses'].value.forEach(element => console.log('element selecionado', element));

  }

  tratarCheckbox() {
    let selectedOrderIds = (this.formClassico.get('interesses') as FormArray).value
      .map((v, i) => v ? this.listaInteresses[i].id : null)
      .filter(v => v !== null);
    console.log('selectedOrderIds', selectedOrderIds)
  }

}

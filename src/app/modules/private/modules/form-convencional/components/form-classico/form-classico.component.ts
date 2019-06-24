import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { ItemGenerico } from 'src/app/shared/shared-models/item-generico';
import { PessoaService } from '../../services/pessoa-service';

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
    this.consultarListaInteresses()
    this.consultarListaEstadoCivil();
    this.consultarlistaSexo();
    
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

  getFormArray(nome: string): FormArray {
   return (<FormArray>this.formClassico.get(nome));
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

  // mockarlistaInteresses() {
  //   this.listaInteresses = [
  //     {
  //       id: 1,
  //       nome: 'Cultura'
  //     },
  //     {
  //       id: 2,
  //       nome: 'Tecnologia'
  //     },
  //     {
  //       id: 3,
  //       nome: 'Automobilismo'
  //     }
  //   ];
  // }

  // mockarlistaSexo() {
  //   this.listaSexo = [
  //     {
  //       id: 1,
  //       nome: 'Masculino'
  //     },
  //     {
  //       id: 2,
  //       nome: 'Feminino'
  //     },
  //     {
  //       id: 3,
  //       nome: 'Outro'
  //     }
  //   ]
  // }

  // mockarListaEstadoCivil() {
  //   this.listaEstadoCivil = [
  //     {
  //       id: 1,
  //       nome: 'Solteiro'
  //     },
  //     {
  //       id: 2,
  //       nome: 'Casado'
  //     },
  //     {
  //       id: 3,
  //       nome: 'Divorciado'
  //     }
  //   ]
  // }

  gerarFormArrayInteresses() {
    return this.listaInteresses.map(
      (interesse) => {
        (<FormArray>this.formClassico.get('interesses')).push(this.gerarFormGroup())
      } 
    )
  }

  gerarFormGroup() {
    return this.formBuilder.group({
      id: null,
      nome: null
    })
  }

  

  salvarForm() {
    console.log('FormGroup', this.formClassico);
    console.log('RawValue', this.formClassico.getRawValue());
    this.formClassico.controls['interesses'].value.forEach(element => console.log('element selecionado', element));

    
    
  }

}

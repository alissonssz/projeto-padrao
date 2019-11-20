import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ItemGenerico } from 'src/app/shared/shared-models/item-generico';
import { PessoaService } from '../../services/pessoa-service';
import { Pessoa } from '../../models/pessoa.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { UniaoTipos } from '../../models/tipo-uniao.model';
import { ModalService } from 'src/app/core/services/modal.service';
import { ModalExemploComponent } from 'src/app/shared/shared-components/modal-exemplo/modal-exemplo.component';

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
  usuarios : Array<Usuario>; 
  uniao: UniaoTipos;
  coresPossiveis = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];
  constructor(
    private pessoaService: PessoaService,
    private formBuilder: FormBuilder,
    private modalService: ModalService
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
    // this.consultarListaEstadoCivil();
    // this.consultarlistaSexo();
    // this.consultarListaInteresses()
    this.inicializarMockUsuario();
    this.testaTipo();
  }

  testaTipo() {
    console.log('uniao', this.uniao);
    
  }

  inicializarMockUsuario() {
    this.usuarios = [
      {
        id: 1,
        nome: 'Alisson Santos de Souza'
      },
      {
        id: 2,
        nome: 'Paulisson Santos de Souza'
      },
      {
        id: 3,
        nome: 'Ricardisson Santos de Souza'
      },
      {
        id: 4,
        nome: 'Ricardisson Santos de Souza'
      },
      {
        id: 5,
        nome: 'Jessika Azeda'
      }
    ]
  }

  inicializarFormClassico() {
    this.formClassico = this.formBuilder.group({
      nome: [null, [Validators.maxLength(2)]],
      email: [null, [Validators.required]],
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

    let pessoaEnvio: Pessoa = this.formClassico.getRawValue();
    this.tratarCheckbox();
    this.validacao(this.formClassico);
    // this.formClassico.controls['interesses'].value.forEach(element => console.log('element selecionado', element));

  }


  validacao(form: FormGroup) {

    if (form && form.invalid) {
      console.log('form', form);
      for (const control in form.controls) {
        const element = document.querySelector(`[formControlName="${control}"]`)
        console.log('control', element);
        
      }
    }
  }

  tratarCheckbox() {
    let selectedOrderIds = (this.formClassico.get('interesses') as FormArray).value
      .map((v, i) => v ? this.listaInteresses[i].id : null)
      .filter(v => v !== null);
    console.log('selectedOrderIds', selectedOrderIds)
  }

  abrirModal() {
    let instancia = this.modalService.abrirModal(ModalExemploComponent, {initialState: {titulo: 'Meu título'}});
    instancia.$salvar.subscribe(abrir => console.log('Emissão ao salvar', abrir));
    instancia.$fechar.subscribe(fechar => console.log('Emissão ao fechar', fechar));

  }

}

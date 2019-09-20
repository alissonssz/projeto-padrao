import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'pp-form-alterado',
  templateUrl: './form-alterado.component.html',
  styleUrls: ['./form-alterado.component.css']
})
export class FormAlteradoComponent implements OnInit {

  formCustomizado: FormGroup;
  listaRadio: Array<any>;
  listaAnexo: Array<any>;
  constructor(
    private formBuilder: FormBuilder
  ) { 

  }

  ngOnInit() {
    this.inicializarFormCustomizado();
    this.inicializarRadio();
    this.inicializarAnexo();
  }

  inicializarFormCustomizado() {
    this.formCustomizado = this.formBuilder.group({
      nome: [null, []],
      radio: this.formBuilder.array([]),
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

  inicializarAnexo() {
    this.listaAnexo = [
      {
        id: 1,
        nomeArquivo: 'Arquivo1',
        publico: 'N'
      },
      {
        id: 2,
        nomeArquivo: 'Arquivo2',
        publico: 'S'
      },
      {
        id: 3,
        nomeArquivo: 'Arquivo3',
        publico: 'N'
      }
    ]
    this.gerarFormArrayInteresses();
  }

  getFormArray(nome: string): FormArray {
    return (<FormArray>this.formCustomizado.get(nome));
  }

  gerarFormArrayInteresses() {
    return this.listaAnexo.map(
      (interesse) => {
        this.getFormArray('radio').push(this.formBuilder.control(null, [Validators.required]))
      }
    )
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
    //(this.formCustomizado.get('radio') as FormArray).push('S');
    this.formCustomizado.get('sn').setValue('N');
  }

  reset() {
    this.formCustomizado.reset();
  }

}

import { Component, Input, Renderer2, ViewChild, ChangeDetectorRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'pp-radio-input-control',
  templateUrl: './radio-input-control.component.html',
  styleUrls: ['./radio-input-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioInputControlComponent),
      multi: true
    },
  ]
})
export class RadioInputControlComponent implements ControlValueAccessor {
  @ViewChild('radioRef', {static: false}) tstInput;
  @Input()
  lista:Array<any>;
  onChange;
  onTouch;
  disabled;
  value;
  constructor(
    private renderer: Renderer2,
    private _cdr: ChangeDetectorRef
    ) { }

  writeValue(obj: any): void {
    this.value = obj;
    console.log('writeValue:', obj);
    if(obj) {
      this.tstInput.nativeElement.value = obj;
    } 
    
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  selecionarOpcao(valor) {
    console.log('valor selecionado', valor);
    this.value = valor;
    this.onChange(valor);
    this.onTouch();
  }
  

 
}

import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({ selector: '[validacao]' })
export class DiretivaValidacao implements OnInit {

    constructor(private elemento: ElementRef, 
                private renderer: Renderer2,
                private control : NgControl
    ) {
        
    }

    ngOnInit(): void {
        this.control.valueChanges.
            subscribe(value => { 
                console.log('change value', value);
                
                if (this.control.invalid) {
                    this.renderer.addClass(this.elemento.nativeElement, 'error-field');
                } else {
                    this.renderer.removeClass(this.elemento.nativeElement, 'error-field');
                }
            });
        console.log('a', this.control);
        
    }
}
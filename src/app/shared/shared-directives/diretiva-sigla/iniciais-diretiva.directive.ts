import { Directive, ElementRef, Renderer2, Input, OnInit, HostBinding } from '@angular/core';

@Directive({ selector: '[iniciaisDiretiva]' })
export class IniciasDiretiva implements OnInit {
    
    @Input() nome: string;
    @Input() corTexto: string;
    @Input() coresPossiveis: Array<string>;
    iniciais: string;

    constructor(private elemento: ElementRef, private renderer: Renderer2) {
        
    }

    ngOnInit(): void {
        this.construirInicias()  
    }

    construirInicias() {
        const iniciais = this.recuperarIniciais(this.nome);
        console.log('iniciais', iniciais);
        
        this.setConteudo(iniciais);
        this.setCorBackGround(this.escolherCor());
        this.setCorTexto(this.corTexto);
    }
    

    recuperarIniciais(nome: string): string {
        if (nome) {
            return this.nome.split(' ').map((palavra: string) => { return palavra.charAt(0).toUpperCase()}).join('').substr(0,2);
        }
    }

    escolherCor(): string {
        const index = Math.floor(Math.random() * this.coresPossiveis.length);
        return this.coresPossiveis[index];
    }

    
    setConteudo(iniciais: string): void {
        const span = this.renderer.createElement('p');
        const no = this.renderer.createText(iniciais);
        this.renderer.appendChild(span, no);
        this.renderer.appendChild(this.elemento.nativeElement, span);
    }

    setCorBackGround(corBackground: string): void {
        this.renderer.setStyle(this.elemento.nativeElement, 'background', corBackground);
    }

    setCorTexto(corTexto: string): void {
        this.renderer.setStyle(this.elemento.nativeElement, 'color', corTexto);
    }
}
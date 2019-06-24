
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ItemGenerico } from 'src/app/shared/shared-models/item-generico';

@Injectable()
export class PessoaService {
    constructor(private http: HttpClient) {
        
    }

    getPessoa(id: number) {
        return this.http.get(`${environment.URL_API}/pessoa/${id}`);
    }

    getPessoas() {
        return this.http.get(`${environment.URL_API}/pessoa`);
    }

    getEstadoCivil() {
        return this.http.get<Array<ItemGenerico>>(`${environment.URL_API}/estadoCivil`);
    }

    getSexo() {
        return this.http.get<Array<ItemGenerico>>(`${environment.URL_API}/sexo`);
    }

    getInteresses() {
        return this.http.get<Array<ItemGenerico>>(`${environment.URL_API}/interesses`);
    }
}
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getCooperado() {
    return this.http
      .get<any>('assets/mocks/db.json')
      .toPromise()
      .then((res) => <any[]>res.cooperado)
      .then((data) => {
        return data;
      });
  }

  findCooperadoByCPF(cpf: string) {
    return this.http
      .get<any>('assets/mocks/db.json')
      .toPromise()
      .then((res) => <any[]>res.cooperado)
      .then((data) => {
        let findCooperado = data.find((cooperado) => cooperado.cpf == cpf);
        if (findCooperado) {
          return findCooperado;
        } else {
          return {
            message: 'Não foi encontrado nenhum cooperado com esse CPF',
          };
        }
      });
  }
}

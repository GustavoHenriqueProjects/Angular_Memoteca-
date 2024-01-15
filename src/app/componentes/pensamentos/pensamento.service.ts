import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  //Inseção de dependencia usando o construtor
  constructor(private http: HttpClient) { }

}

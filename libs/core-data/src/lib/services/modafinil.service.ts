import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Modafinil } from "@modafinil/api-interfaces";

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})

export class ModafinilService {
model = 'modafinils';

  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Modafinil[]>(this.getUrl());
  }

  find(modafinilId: string) {
    return this.httpClient.get<Modafinil>(this.getUrlById(modafinilId));
  }

  create(modafinils: Modafinil) {
    return this.httpClient.post<Modafinil>(this.getUrl(), modafinils);
  }

  update(modafinils: Modafinil) {
    return this.httpClient.patch<Modafinil>(this.getUrlById(modafinils.id), modafinils);
  }

  delete({ id }: Modafinil) {
    return this.httpClient.delete<Modafinil>(this.getUrlById(id));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`;
  }
}

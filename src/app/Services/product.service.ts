import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from '../Enum/api-url.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http :HttpClient) { }

  getProducts(){
    return this.http.get<any[]>(ApiUrl.PRODUCTS);
  }

  getProductById(id : number){

    return this.http.get<any>(`${ApiUrl.PRODUCTS}/${id}`);
  }
}

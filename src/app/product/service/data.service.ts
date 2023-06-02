import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  //api call to access all product datas

  viewAllProducts(){
    return this.http.get(" http://localhost:3000/products")
  }

  //api to access single product data

  viewProduct(id:any){
    return this.http.get("http://localhost:3000/products/"+id)
  }

  //api to add new product

  addNewProduct(productObject:any){
    return this.http.post('http://localhost:3000/products/',productObject)
  }
}

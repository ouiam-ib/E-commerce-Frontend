import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // This defines the base URL for the API endpoint from which the product data will be fetched.
  private baseUrl = "http://localhost:8080/api/products";
  
  //inject httpClient 
  constructor(private httpClient : HttpClient) { }

  //return an observable 
  // Map the JSON data from Spring Data REST to Product array
  getProductList(): Observable<Product[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(Response => Response._embedded.Product)
    );
  }
}

// this interface unwraps the JSON from Spring DATA REST _embedded entry
interface GetResponse{
  _embedded : {
    Product : Product[];
  }
}
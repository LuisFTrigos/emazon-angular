import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  private apiUrl = 'http://localhost:9090/api/category/create';

  constructor(private httpClient: HttpClient) {}

  createCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.apiUrl, category)
  }

  getCategories(order: 'asc' | 'desc' = 'asc'): Observable<any> {
    const params = new HttpParams().set('order', order); 
    return this.httpClient.get(this.apiUrl, { params });
  }

}

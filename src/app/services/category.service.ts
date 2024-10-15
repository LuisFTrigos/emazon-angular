import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:9090/api/category/create';

  constructor(private http: HttpClient) {}

  createCategory(category: {categoryName:string}): Observable<any> {
    return this.http.post(this.apiUrl, category);
  }

  getCategories(order: 'asc' | 'desc' = 'asc'): Observable<any> {
    const params = new HttpParams().set('order', order); 

    return this.http.get(this.apiUrl, { params });
  }

}

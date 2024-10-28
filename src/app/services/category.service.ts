import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Category } from '../models/category.model';
import { Config } from 'jest';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  private apiUrl = 'http://127.0.0.1:9090/api/category';

  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsdWNoaXRvQG9sYS5jb20iLCJyb2xlIjoiQURNSU4iLCJ1c2VySWQiOjEsImV4cCI6MTczMDY0NDYwN30.5wSTotqOxPKRT8Erbqivq11iQrFNb-UBRRYvTWo4hXw'
  constructor(private httpClient: HttpClient) {}

  createCategory(category: Category): Observable<Category> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    });
    return this.httpClient.post<Category>(`${this.apiUrl}/create`, category, {headers}).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status == 400){
          return throwError(() => new Error('Error 400: Failed post. Categoy is already exists.'));
        }
        return throwError(() => new Error('Failed post.'));
      })
    );
  }

  getCategories(currentPage: number, pageSize: number, order: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    });
    const params = new HttpParams()
    .set('page', currentPage.toString())
    .set('pageSize', pageSize.toString())
    .set('order', order); 
    return this.httpClient.get<any>(`${this.apiUrl}?page=${currentPage}&size=${pageSize}&order=${order}`, {headers});

  }

  existsByCategoryName(categoryName: string): Observable<boolean> {
      return this.httpClient.get<boolean>(`${this.apiUrl}?page=0&size=10&sortDirection=desc&categoryName=${categoryName}`)
  }

}

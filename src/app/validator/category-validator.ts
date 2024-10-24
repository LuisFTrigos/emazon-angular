import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryValidator implements AsyncValidator {
  constructor(private categoryService: CategoryService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const categoryName = control.value;

    return this.categoryService.existsByCategoryName(categoryName).pipe(
      map((exists: boolean) => (exists ? { categoryExists: true } : null)),
      catchError(() => of(null))
    );
  }
}
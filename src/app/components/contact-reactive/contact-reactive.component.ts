import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryValidator } from 'src/app/validator/category-validator';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {
  profileForm = new FormGroup({
    categoryName: new FormControl(''),
    categoryDescription: new FormControl('')
  })
  errorMessage: string | null = null; 

  constructor(private fb: FormBuilder, private categoryService: CategoryService, private categoryValidator: CategoryValidator) { }

  ngOnInit(): void {
    this.profileForm = this.initForm();
  }

  initForm():FormGroup{
    return this.fb.group({
      categoryName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)],
      [this.categoryValidator.validate.bind(this.categoryValidator)]],
      categoryDescription: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(90)]]
    })
  }

    onSubmit() {

     if (this.profileForm.valid) {
        const category: Category = {categoryName: this.profileForm.value?.categoryName || '' ,
           categoryDescription:this.profileForm.value?.categoryDescription || ''};

        this.categoryService
        .createCategory(category)
        .subscribe({next: res => {
          console.warn('Category created' ,res);
          this.profileForm.reset();
        },
        error: (error) => {
          this.errorMessage = 'Category is already exists. Try with another name.';
          console.error('Category already exists ');
        }
      
      });
    }else {
      console.log('Invalid post');
    }
}
}

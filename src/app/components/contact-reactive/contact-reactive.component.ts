import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {
  categoryForm!: FormGroup;
  categoryName: string = '';
  categoryDescription: string = '';

  constructor(private fb: FormBuilder, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryForm = this.initForm();
  }

  initForm():FormGroup{
    return this.fb.group({
      categoryName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      categoryDescription: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(90)]]
    })
  }

    onSubmit() {
      if(this.categoryForm.valid){
        console.log('this is a category ',this.categoryName)
        this.categoryService.createCategory(this.categoryForm.value).subscribe(
          response => {
            console.log('Created category: ', response);
            this.categoryForm.reset();
          },
          error => {
            console.error('Error to create the category', error);
          }
        );
      }
    }
}

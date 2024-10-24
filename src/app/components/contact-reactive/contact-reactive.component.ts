import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

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

  constructor(private fb: FormBuilder, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.profileForm = this.initForm();
  }

  initForm():FormGroup{
    return this.fb.group({
      categoryName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      categoryDescription: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(90)]]
    })
  }

    onSubmit() {
    
        const category: Category = {categoryName: this.profileForm.value?.categoryName || '' ,
           categoryDescription:this.profileForm.value?.categoryDescription || ''};

        this.categoryService
        .createCategory(category)
        .subscribe( res => {console.warn('Category created' ,res)});
        this.profileForm.reset();
          
        console.warn(this.profileForm.value)
      
    }
    
}

import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: any[] = [];
  order: 'asc' | 'desc' = 'asc';

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories(this.order).subscribe(response => {
      this.categories = response;
    });
  }

  onOrderChange(event: any) {
    this.order = event.target.value;
    this.getCategories();
  }
}

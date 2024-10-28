import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  currentPage:number = 0;
  totalPages:number = 0;
  pageSize:number = 5;
  order: 'asc' | 'desc' = 'asc';
  

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
    console.log(this.categories)
  }

  getCategories(): void {
    this.categoryService
    .getCategories(this.currentPage, this.pageSize, this.order)
    .subscribe({next: response => {
      console.log(response.content)
     this.categories = response.content;
    }});
  }

  onOrderChange(event: any): void {
    this.order = event.target.value;
    this.getCategories();
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getCategories();
    }
  }
}

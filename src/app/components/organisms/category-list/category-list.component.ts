import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: any[] = [];
  currentPage:number = 1;
  totalPages:number = 0;
  pageSize:number = 10;
  order: 'asc' | 'desc' = 'asc';

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService
    .getCategories(this.currentPage, this.pageSize, this.order)
    .subscribe(response => {
      this.categories = response.categories;
      this.totalPages = response.totalPages;
    });
  }

  onOrderChange(event: any): void {
    this.order = event.target.value;
    this.getCategories();
  }

  prevPage(): void {
    if(this.currentPage > 1){
      this.currentPage--;
      this.getCategories();
    }
  }

  nextPage(): void {
    this.currentPage++;
    this.getCategories();
  }
}

import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './models/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stock-angular';
  http = inject(HttpClient);
  categories: Category[]= [];

  changeTitle(){
    this.title = 'changed';
  }

  ngOnInit(){
    this.http.get<Category[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.categories = data
      });
  }
}

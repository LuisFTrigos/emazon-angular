import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { InputComponent } from './components/atoms/input/input.component';
import { AppComponent } from './app.component';
import { MenuItemsComponent } from './components/atoms/menu-items/menu-items.component';
import { CategorySectionComponent } from './components/organisms/category-section/category-section.component';
import { ManageCategoriesComponent } from './components/pages/manage-categories/manage-categories.component';
import { SidebarComponent } from './components/molecules/sidebar/sidebar.component';
import { CategoryListComponent } from './components/organisms/category-list/category-list.component';
import { ContactReactiveComponent } from './components/contact-reactive/contact-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    MenuItemsComponent,
    CategorySectionComponent,
    ManageCategoriesComponent,
    SidebarComponent,
    CategoryListComponent,
    ContactReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

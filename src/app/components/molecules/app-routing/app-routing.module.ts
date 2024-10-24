import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from 'src/app/components/organisms/category-list/category-list.component'; 
import { ContactReactiveComponent } from 'src/app/components/contact-reactive/contact-reactive.component'; 

const routes: Routes = [
  { path: 'categories', component: CategoryListComponent }, // Ruta para ver las categorías
  { path: 'create', component: ContactReactiveComponent }, // Ruta para crear categorías
  { path: '', redirectTo: '/categories', pathMatch: 'full' }, // Redirigir a /categories por defecto
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



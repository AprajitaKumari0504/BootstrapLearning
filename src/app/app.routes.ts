import { Routes } from '@angular/router';
import { Login } from './login/login';
import { TodoApp } from './todo-app/todo-app';
import { DataBinding } from './data-binding/data-binding';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'todos', component: TodoApp },
    { path: 'login', component: Login },
    { path: 'databinding', component: DataBinding },
];

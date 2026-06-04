import { Routes } from '@angular/router';
import { Login } from './login/login';
import { TodoApp } from './todo-app/todo-app';

export const routes: Routes = [
    { path: '', redirectTo: '/todos', pathMatch: 'full' },
    { path: 'todos', component: TodoApp },
    { path: 'login', component: Login }
];

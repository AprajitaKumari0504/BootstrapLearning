import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Login } from './login/login';
import { TodoApp } from './todo-app/todo-app';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,CommonModule,Login, TodoApp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BootstrapLearning');
}
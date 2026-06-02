import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Login } from './login/login';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,CommonModule,Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BootstrapLearning');
}
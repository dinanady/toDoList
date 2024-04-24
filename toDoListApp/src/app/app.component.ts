import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodolistappComponent } from './todolist/todolistapp/todolistapp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodolistappComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toDoListApp';
}

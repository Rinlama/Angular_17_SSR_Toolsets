import { Component, OnInit, inject, signal } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TableModule],
  templateUrl: './todo.component.html',
  providers: [TodoService],
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  todoService = inject(TodoService);
  todo: Array<any> = [];

  ngOnInit(): void {
    this.todoService.getTodo().subscribe((d) => {
      this.todo = d;
    });
  }
}

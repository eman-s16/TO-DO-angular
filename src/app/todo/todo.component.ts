import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: string[] = [];
  newTask: string = '';
  completedTasks: string[] = [];

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  removeTask(task: string) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    // Remove from completed tasks as well
    const completedIndex = this.completedTasks.indexOf(task);
    if (completedIndex !== -1) {
      this.completedTasks.splice(completedIndex, 1);
    }
  }

// Function to toggle the completion status of a task
toggleTaskCompletion(task: string) {
  if (this.completedTasks.includes(task)) {
    // If the task is completed, remove it from completedTasks
    const index = this.completedTasks.indexOf(task);
    this.completedTasks.splice(index, 1);
  } else {
    // If the task is not completed, mark it as completed by adding to completedTasks
    this.completedTasks.push(task);
  }
}

// Function to check if a task is marked as completed
isDone(task: string): boolean {
  // Check if the task is in the completedTasks array
  return this.completedTasks.includes(task);
}
}

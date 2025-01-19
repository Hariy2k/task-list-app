import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Task {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = new BehaviorSubject<Task[]>([]);
  private readonly defaultTasks: Task[] = [
    {
      id: Date.now().toString(),
      title: 'Complete Angular Project Setup',
      description: 'Set up new Angular project with required dependencies and initial configuration.',
      isDone: true
    },
    {
      id: (Date.now() + 1).toString(),
      title: 'Implement User Authentication',
      description: 'Add user login and registration functionality with JWT authentication.',
      isDone: false
    },
    {
      id: (Date.now() + 2).toString(),
      title: 'Create Task Management Features',
      description: 'Implement CRUD operations for task management system.',
      isDone: true
    },
    {
      id: (Date.now() + 3).toString(),
      title: 'Write Unit Tests',
      description: 'Add comprehensive unit tests for all components and services.',
      isDone: false
    }
  ];

  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    let existingTasks: Task[] = [];
    
    if (storedTasks) {
      existingTasks = JSON.parse(storedTasks);
    }

    // Combine default tasks with existing tasks
    const allTasks = [...this.defaultTasks, ...existingTasks];
    
    // Filter out any duplicates based on id
    const uniqueTasks = allTasks.filter((task, index, self) =>
      index === self.findIndex(t => t.id === task.id)
    );
    
    this.updateTasks(uniqueTasks);
  }

  getTasks(): Observable<Task[]> {
    return this.tasks.asObservable();
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.value.find(task => task.id === id);
  }

  addTask(title: string, description: string): void {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      isDone: false
    };
    
    const updatedTasks = [...this.tasks.value, newTask];
    this.updateTasks(updatedTasks);
  }

  toggleTaskStatus(taskId: string, isDone: boolean): void {
    const updatedTasks = this.tasks.value.map(task => 
      task.id === taskId ? { ...task, isDone } : task
    );
    this.updateTasks(updatedTasks);
  }

  private updateTasks(tasks: Task[]): void {
    // Only store user-created tasks in localStorage
    const userTasks = tasks.filter(task => !this.defaultTasks.some(dt => dt.id === task.id));
    this.tasks.next(tasks);
    localStorage.setItem('tasks', JSON.stringify(userTasks));
  }
} 
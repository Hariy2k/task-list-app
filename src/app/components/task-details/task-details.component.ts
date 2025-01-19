import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TaskService, Task } from '../../services/task.service';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [CommonModule, CheckboxComponent, FormsModule, RouterModule],
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task?: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    const taskId = this.route.snapshot.paramMap.get('taskId');
    if (taskId) {
      this.task = this.taskService.getTaskById(taskId);
    }
  }

  onTaskToggle() {
    if (this.task) {
      this.taskService.toggleTaskStatus(this.task.id, this.task.isDone);
    }
  }
} 
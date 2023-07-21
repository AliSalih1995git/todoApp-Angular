import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {
    id: 1,
    text: 'Doctors Appointment',
    day: 'July 19th at 2:30pm',
    reminder: true,
  };
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleRemainder: EventEmitter<Task> = new EventEmitter();

  faTimes: typeof faTimes = faTimes;
  constructor() {}
  ngOnInit(): void {}
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleRemainder.emit(task);
  }
}

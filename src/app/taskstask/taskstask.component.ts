import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

interface Tasks {
  id: string,
  title: string,
  time: string,
  summary: string
}

@Component({
  selector: 'app-taskstask',
  templateUrl: './taskstask.component.html',
  styleUrls: ['./taskstask.component.scss']
})
export class TaskstaskComponent {
  @Input() tasks!: Tasks[];
  @Output() complete = new EventEmitter<string>()
  tasksID!: string;
  ngOnInit(){
    console.log(this.tasks)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tasks']) {
      console.log('ngOnChanges - Tasks changed:', changes['tasks'].currentValue);
    }
  }

  onCompleteTask() {
    console.log('Complete button clicked');
    this.tasks.forEach((task) => {
      console.log('Emitting task ID:', task.id);
      this.complete.emit(task.id);
    });
  }
}

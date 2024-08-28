import { ChangeDetectorRef } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-task',
  templateUrl: './app-task.component.html',
  styleUrls: ['./app-task.component.scss']
})
export class AppTaskComponent {
  @Input() name!: string
  @Input() id!: string;

  addNewSelected: boolean = false;
  enteredTitle = '';
  enteredData = '';
  enteredSummary = '';
  task = [
    {
      id: '1',
      userID:'u1',
      title: "Angular Topics",
      time: "20-02-2022",
      summary: "This Summary I am adding to learn some Angular topics"
    },
    {
      id: '2',
      userID:'u2',
      title: "React Topics",
      time: "20-02-2022",
      summary: "This Summary I am adding to learn some React topics"
    },
    {
      id: '3',
      userID:'u3',
      title: "Vue Topics",
      time: "20-02-2022",
      summary: "This Summary I am adding to learn some Vue topics"
    }
  ];

  constructor(private cdr: ChangeDetectorRef) { }

  get getSelectedUser() {
    const selectedData = this.task.filter((item) => item.id == this.id);
    return selectedData
  }

  addItem() {
    console.log('Adding item:', this.enteredTitle, this.enteredData, this.enteredSummary);
    this.task.push({
      id: this.id,
      userID: new Date().getTime().toString(),
      title: this.enteredTitle,
      time: this.enteredData,
      summary: this.enteredSummary
    });

    // Trigger change detection manually
    this.cdr.detectChanges();

    this.addNewSelected = false;
    console.log('Updated task list:', JSON.stringify(this.task, null, 2));
  }

  onCompleteTask(id: string) {
    console.log('Completing task with ID:', id);
    // Trigger change detection manually
    this.cdr.detectChanges();
    this.task = this.task.filter((task) => task.id != id);
    console.log('Updated task list:', JSON.stringify(this.task, null, 2));
  }
}
import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { DUMMY_DATA } from './dummy-user.component';
import { CounterComponent } from './viewChild/counter/counter.component';

const randomIndex = Math.floor(Math.random() * DUMMY_DATA.length)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'udemy';
  selectedUser = DUMMY_DATA;
  selectedId: string = '1';
  selectedOption!: string;
  // @ViewChild("childheading") childheading!: ElementRef;
  @ViewChildren('childheading') childheading!: QueryList<any>;
  @ViewChild('childCom') child!: CounterComponent;
  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // console.log(this.child.counter,"count")
    console.log(this.childheading)
    this.childheading.first.nativeElement.style.color = 'red'
    this.childheading.last.nativeElement.style.color = 'green'
    // this.childheading.nativeElement.style.color = 'red'
    //ViewChild
    // this.renderer.setStyle(this.childheading.nativeElement, 'background-color', 'orange');

  }

  get selectedUsers() {
    return this.selectedUser.find((item) => item.id === this.selectedId)!
  }

  onSelectId(id: string) {
    this.selectedId = id
    console.log("this is id" + id)
  }

  inc() {
    this.child.increment()
  }

  dec() {
    this.child.decrement()
  }
}

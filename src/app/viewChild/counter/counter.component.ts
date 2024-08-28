import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
public counter:number=0
ngOnInit(){

}

increment(){
this.counter++
}

decrement(){
this.counter--
}

}

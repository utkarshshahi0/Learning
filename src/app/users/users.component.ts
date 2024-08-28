import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
@Input() name!:string; 
@Input() id!:string;
@Input({required:true}) selected!:boolean;
@Output() select = new EventEmitter()

onSelect(){
this.select.emit(this.id)
}
}

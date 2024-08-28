import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommanService } from '../comman.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {

formGroup!:FormGroup
  formValue: any = '';

constructor(private fb:FormBuilder,
  private services:CommanService
){}


ngOnInit(){
  this.formGroup = this.fb.group({
    name:['',Validators.required],
    age:['',Validators.required],
    address:['',Validators.required],
    items:this.fb.array([])
  })
  this.fetchData()
}

addItem(){
 const item  = this.fb.group({
  english:['',Validators.required],
  hindi:['',Validators.required]
 })
 this.items.push(item)
}

get items(){
  return this.formGroup.get('items') as FormArray;
}

onSubmit(){
let formData = this.formGroup.value;
console.log(formData)
localStorage.setItem('form-data',JSON.stringify(formData))
this.loadData()
console.log(this.formValue)
}

loadData(){
  const storedData = localStorage.getItem('form-data')
  if(storedData){
    this.formValue = JSON.parse(storedData)
  } else {
    this.formValue = {};
  }
}

fetchData(){
  this.services.getAPI().subscribe((data)=>{
  console.log(data)
  })
}

}

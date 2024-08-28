import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AppTaskComponent } from './app-task/app-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskstaskComponent } from './taskstask/taskstask.component';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { CrudComponent } from './crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import { CounterComponent } from './viewChild/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AppTaskComponent,
    TaskstaskComponent,
    AddNewTaskComponent,
    CrudComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

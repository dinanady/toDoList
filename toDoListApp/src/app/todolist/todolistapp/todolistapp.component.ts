
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ToDo } from '../../model/to-do';
import { TodoService } from '../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { filter, timeInterval } from 'rxjs';
import { NgClass } from '@angular/common';
import { Title } from '@angular/platform-browser';
;
@Component({
  selector: 'app-todolistapp',
  standalone: true,
  imports: [FormsModule,NgClass],
  
templateUrl: './todolistapp.component.html',
  styleUrl: './todolistapp.component.css'
})
export class TodolistappComponent implements OnInit {

tasks:ToDo[]=[];

newtodo:ToDo={} as ToDo
availableTask:boolean=false;
errorMge ="";
deletedtaskId:string=""
updatedTask:ToDo={} as ToDo
EditOpenModal:boolean=false;
errorMgeedit ="";
editForm: any;
constructor(private todoservice :TodoService){};
ngOnInit(): void {
 
  this.gettasks()
  this.availableTask=this.tasks.length>0;
    
  }

gettasks(){
 this.todoservice.getAllTodos().subscribe(x=>{
  this.tasks=x;
  })
}
createTodo(): void {
  // Check if the title is not empty
  if (this.newtodo.title.trim() !== "") {
    // Create a new todo object
    const newTodo = { id: this.newtodo.id, title: this.newtodo.title, completed: false };

    // Call the service to create the new todo
    this.todoservice.createToDo(newTodo).subscribe(todo => {
      // Push the new todo to the tasks array
      this.tasks.push(todo);
      
      // Update the availability of tasks
      this.availableTask = true;

      // Clear the new todo title
      this.newtodo.title = "";

      // Optionally, you may not need to call ngOnInit() here
      this.errorMge=""
      this.ngOnInit();
    });

  } else {
    console.log("Title is required");
    this.errorMge="Title is required";
    setTimeout(() => {
      this.errorMge=""
    }, 3000);
  
  }
}
deletedtaskid(taskid : string):void
{
this.deletedtaskId=taskid
}
deletetodo():void{

  this.todoservice.deleteTodo(this.deletedtaskId).subscribe(()=>{

   this.tasks=this.tasks.filter(todo=>todo.id !==this.deletedtaskId);
    
   this.availableTask= (this.tasks.length>0);

   
  })
}
gettask(id:string){
  this.todoservice.getTodoById(id).subscribe(todo =>{
    return this.tasks.find(todo => todo.id===id);
  })
}
toggleTaskStatus(task: ToDo): void {
  task.completed = !task.completed;
  

}
edittask(editTask: ToDo) {
  if (editTask.title.trim() !== "") { // Check if title is not empty
    this.updatedTask = editTask;
    this.EditOpenModal = true; // Open the edit modal
    console.log(editTask);
  }
}

updateTask() {
  if (this.updatedTask.title.trim() !== "") { // Check if title is not empty
    this.todoservice.updateToDo(this.updatedTask).subscribe(todo => {
      this.updatedTask = todo;
      this.closeModal();
    });
  }
 
}
closeModal(){
  const divmode= document.getElementById('editTaskModal');
  if(divmode!=null){
    divmode.style.display="none";
  // divmode.style.opacity="100";
  }

}

}
//   tasks:string[]=[];
//   newtask:string="";
//   
//  addtask(){
//   if(this.newtask!==""){
//     this.tasks.push(this.newtask.trim());
//     this.availableTask=true
//   }
// this.newtask="";

//  }
//  deleteTask(id:number){
//   this.tasks.splice(id,1);
//   this.availableTask=this.tasks.length>0
//  }
//   editTask(id:number,newtaskedit:string): string|void{
//     console.log(newtaskedit)
   
//     if(newtaskedit.trim()!==''){
//       console.log(newtaskedit)
//       this.tasks[id]=newtaskedit;
      
//     }
//     else{
//       newtaskedit=this.tasks[id];
//       return this.newtask=newtaskedit;
//     }
//     this.newtask="";
  
//   }

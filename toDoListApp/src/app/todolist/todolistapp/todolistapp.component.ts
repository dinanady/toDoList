import { Component } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolistapp',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './todolistapp.component.html',
  styleUrl: './todolistapp.component.css'
})
export class TodolistappComponent {
  tasks:string[]=[];
  newtask:string="";
  availableTask:boolean=false;
 addtask(){
  if(this.newtask!==""){
    this.tasks.push(this.newtask);
    this.availableTask=true
  }
this.newtask="";
console.log(this.tasks)
 }
 deleteTask(id:number){
  this.tasks.splice(id,1);
  this.availableTask=this.tasks.length>0
 }
//  editTask(id:number,string:newtaskedit){
  
//  }

}

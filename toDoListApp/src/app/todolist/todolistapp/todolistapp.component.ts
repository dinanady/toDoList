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
    this.tasks.push(this.newtask.trim());
    this.availableTask=true
  }
this.newtask="";

 }
 deleteTask(id:number){
  this.tasks.splice(id,1);
  this.availableTask=this.tasks.length>0
 }
  editTask(id:number,newtaskedit:string): string|void{
    console.log(newtaskedit)
   
    if(newtaskedit.trim()!==''){
      console.log(newtaskedit)
      this.tasks[id]=newtaskedit;
      
    }
    else{
      newtaskedit=this.tasks[id];
      return this.newtask=newtaskedit;
    }
    this.newtask="";
  
  }

}

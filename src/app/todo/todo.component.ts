import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoList: string [] = [];
  inputvalue :string ='';

  removeTodo(name:string){
    this.todoList = this.todoList.filter(value=> value !== name)
  }

  addTodo(){
    
    if(this.inputvalue !==''){
      this.todoList.push(this.inputvalue)
      this.inputvalue = ''
    }else{
      alert('Please Enter Todo value..')
    }
  }

  constructor() {}

  ngOnInit(): void{
    this.todoList = ['HTML', 'CSS'];
  }
}

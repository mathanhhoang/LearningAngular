import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Subscription } from 'rxjs';
import { Todo } from './models/todo.class';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'LearningAngular';

  public age : number = 21;

  public subscription!: Subscription;
  public todos : Todo[] = [];
  public titles!: string;
  public completed : boolean = false;

  onGetName(event: string): void{
    console.log(event);
  }

  constructor(
    public todoService : TodoService,
    public routerService: Router
  ){
  }
  
  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.subscription = this.todoService.getAllToDos().subscribe(data => {
      console.log(data);
      this.todos = data;
    }, error => { 
      console.log(error);
    });
  }

  onAddTodo() : void {
    let todo = new Todo(this.titles, this.completed);
    this.subscription = this.todoService.addTodo(todo).subscribe(data =>{
      console.log(data);
      console.log("themthanhcong");
      this.loadData();
      // this.todos.push(data);
    }, error => {
      console.log(error)
    })
    console.log('loading');
    
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  navigate(url : string) {
    this.routerService.navigate([url]);
  }
  
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input('age') myAge : number = 1;

  public name : string = 'check name output';
  @Output('name') onHandleName = new EventEmitter<string>();

  onSubmit(){
    this.onHandleName.emit(this.name);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public title : string = 'Event Binding';

  public count : number = 0;

  public display : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(event: MouseEvent): void {
    // console.log("Hello");
    console.log(event);
  }

  onKeyUp(event: KeyboardEvent) :void{
    const target = event.target as HTMLTextAreaElement
    console.log(target.value);
    this.display = target.value
  }

}

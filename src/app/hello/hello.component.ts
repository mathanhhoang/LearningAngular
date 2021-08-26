import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  public name : string = 'interpolation';

  public imgLink : string = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fanhdep123.com%2Ftong-hop-333-hinh-anh-meo-hai-huoc-bua-chat-muon-ngat%2F&psig=AOvVaw2EbuWE9KlT2TwBUnm3_R1K&ust=1625538727142000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCIDOkeXxyvECFQAAAAAdAAAAABAQ.jpg';

  public isValid : boolean = true; 

  public pipes : string = 'Example Pipes';

  public tbWidth : string = '500';

  public isChecked : number = 1; //0: add class / 1: remove

  public isStyle : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  public modelPerson = {
    "name" : "Me the Json",
    "id": "123456"
  }
  
  public date = Date();
  constructor() { }

  ngOnInit() {
  }

  eventPass(){
    this.childEvent.emit('Recevied Data');
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularNew';
  public name = "";
  public myId = "hide";
  model = [
    { name: "Akash", id: 1 },
    { name: "Akash", id: 1 },
    { name: "Akrgeash", id: 1 },
    { name: "Akash", id: 1 }
  ]

}

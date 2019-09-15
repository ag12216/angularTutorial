import { Component, OnInit } from '@angular/core';
import { ServiceDependencyService } from './service-dependency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private obj: ServiceDependencyService) { }
  title = 'angularNew';
  public name = "";

  public myId = "hide";
  model = []
  apiData = []

  public color = "blue";

  public passData = "Angular";
  public textStyles = {
    color: "blue",
    fontStyle: "italic"
  }
  onClick() {
    console.log("Hitted");

    this.model[0].id++
  }
  public receivedData = "message";

  submitClcik(value) {
    console.log(value);
  }

 

  public submit = 0;
  ngOnInit() {
    this.model = this.obj.getList();
    this.submit = this.model[0].id;
    this.obj.getRequest().subscribe(data => {
      this.apiData = data;
      console.log("Data arrived");
      console.log("Data is =" + data[0].login);
      
    });

    this.obj.posRequest().subscribe(dt => {
      console.log(dt);
    });

  }


 
}

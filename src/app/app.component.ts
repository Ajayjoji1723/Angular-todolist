import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo Application';
  public name ='pabsolution';
  public topic = 'Data Binding';
  path: String = "../assets/download.png";
  cname:String = "spl spll"
  d:String = new Date().toLocaleString();
  
}

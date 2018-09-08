import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colors:string[]= ["violet","green","pink","teal","cyan","blue","yellow","orange","maroon"];
  randomize(){
    return Math.floor(Math.random() * this.colors.length);
  }
}

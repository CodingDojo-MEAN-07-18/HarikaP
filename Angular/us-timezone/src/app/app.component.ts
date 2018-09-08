import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US timezone display';
  time = new Date();
  zone = null;
  setZone(zone:string){
    this.time = new Date();
    if (zone === 'MST') {
      this.time.setHours(this.time.getHours() + 1);
    } else if (zone === 'CST') {
      this.time.setHours(this.time.getHours() + 2);
    } else if (zone === 'EST') {
      this.time.setHours(this.time.getHours() + 3);
    } else if (zone === 'clear') {
      this.time = (null);
    }
    this.zone= zone;
  }
}


import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  user = new User();
  users = [];
  onSubmit(){
    this.users.push(this.user);
    this.user = new User();

  }
}
